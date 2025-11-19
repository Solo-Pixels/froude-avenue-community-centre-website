import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { env } from "@/env";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

// Image file extensions to filter
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];

export const galleryRouter = createTRPCRouter({
  getAll: publicProcedure.query(
    async (): Promise<{ images: GalleryImage[] }> => {
      try {
        const bucketUrl = (env.R2BUCKET_URL as string | undefined) ?? null;

        console.log("[Gallery] Starting image fetch...");
        console.log(
          "[Gallery] R2BUCKET_URL:",
          bucketUrl ? "✓ Set" : "✗ Not set",
        );

        if (!bucketUrl) {
          console.warn("[Gallery] R2BUCKET_URL not configured");
          return { images: [] };
        }

        // Check if we have R2 credentials to list objects
        const hasCredentials =
          typeof env.R2_ACCOUNT_ID === "string" &&
          typeof env.R2_ACCESS_KEY_ID === "string" &&
          typeof env.R2_SECRET_ACCESS_KEY === "string" &&
          typeof env.R2_BUCKET_NAME === "string";

        console.log("[Gallery] Credentials check:", {
          R2_ACCOUNT_ID:
            typeof env.R2_ACCOUNT_ID === "string" ? "✓ Set" : "✗ Not set",
          R2_ACCESS_KEY_ID:
            typeof env.R2_ACCESS_KEY_ID === "string" ? "✓ Set" : "✗ Not set",
          R2_SECRET_ACCESS_KEY:
            typeof env.R2_SECRET_ACCESS_KEY === "string"
              ? "✓ Set"
              : "✗ Not set",
          R2_BUCKET_NAME:
            typeof env.R2_BUCKET_NAME === "string"
              ? `✓ Set (${env.R2_BUCKET_NAME})`
              : "✗ Not set",
        });

        if (hasCredentials) {
          // Use AWS SDK to list all objects in the bucket
          // Install: npm install @aws-sdk/client-s3
          try {
            // Dynamic import to avoid errors if package not installed
            const s3Module: {
              S3Client: unknown;
              ListObjectsV2Command: unknown;
            } | null = (await import("@aws-sdk/client-s3").catch(
              () => null,
            )) as {
              S3Client: unknown;
              ListObjectsV2Command: unknown;
            } | null;

            if (!s3Module) {
              console.error(
                "@aws-sdk/client-s3 not installed. Run: npm install @aws-sdk/client-s3",
              );
              return { images: [] };
            }

            const { S3Client, ListObjectsV2Command } = s3Module;

            // Type assertions needed until @aws-sdk/client-s3 is installed
            const S3ClientClass = S3Client as new (config: {
              region: string;
              endpoint: string;
              credentials: { accessKeyId: string; secretAccessKey: string };
            }) => {
              send: (command: unknown) => Promise<{
                Contents?: Array<{ Key?: string }>;
              }>;
            };
            const ListObjectsV2CommandClass =
              ListObjectsV2Command as new (config: {
                Bucket: string;
              }) => unknown;

            const endpoint = `https://${env.R2_ACCOUNT_ID as string}.r2.cloudflarestorage.com`;
            console.log("[Gallery] Connecting to R2 endpoint:", endpoint);
            console.log("[Gallery] Bucket name:", env.R2_BUCKET_NAME as string);

            const s3Client = new S3ClientClass({
              region: "auto",
              endpoint,
              credentials: {
                accessKeyId: env.R2_ACCESS_KEY_ID as string,
                secretAccessKey: env.R2_SECRET_ACCESS_KEY as string,
              },
            });

            const command = new ListObjectsV2CommandClass({
              Bucket: env.R2_BUCKET_NAME as string,
            });

            console.log("[Gallery] Sending ListObjectsV2 command...");
            const response = await s3Client.send(command);

            console.log("[Gallery] Response received:", {
              hasContents: !!response.Contents,
              objectCount: response.Contents?.length ?? 0,
            });

            if (!response.Contents || response.Contents.length === 0) {
              console.warn("[Gallery] Bucket is empty or no objects found");
              return { images: [] };
            }

            // Filter for image files and construct URLs
            // For R2 public dev URL, just append the object key to the base URL
            const normalizedBucketUrl = bucketUrl.endsWith("/")
              ? bucketUrl
              : `${bucketUrl}/`;

            console.log("[Gallery] Filtering objects for images...");
            console.log(
              "[Gallery] Total objects in bucket:",
              response.Contents.length,
            );
            console.log(
              "[Gallery] Sample object keys:",
              response.Contents.slice(0, 5).map(
                (obj: { Key?: string }) => obj.Key,
              ),
            );
            console.log("[Gallery] Base URL for images:", normalizedBucketUrl);

            const images: GalleryImage[] = response.Contents.filter(
              (object: { Key?: string }) => {
                if (!object.Key) return false;
                const ext = object.Key.toLowerCase().substring(
                  object.Key.lastIndexOf("."),
                );
                return IMAGE_EXTENSIONS.includes(ext);
              },
            ).map((object: { Key?: string }, index: number): GalleryImage => {
              const imageUrl = `${normalizedBucketUrl}${object.Key ?? ""}`;
              return {
                id: index + 1,
                src: imageUrl,
                alt:
                  object.Key?.replace(/\.[^/.]+$/, "") ??
                  `Gallery Image ${index + 1}`,
              };
            });

            console.log("[Gallery] Filtered images:", images.length);
            console.log(
              "[Gallery] Image URLs:",
              images.slice(0, 3).map((img) => img.src),
            );

            return { images };
          } catch (s3Error) {
            console.error("[Gallery] Error listing R2 objects:", s3Error);
            if (s3Error instanceof Error) {
              console.error("[Gallery] Error message:", s3Error.message);
              console.error("[Gallery] Error stack:", s3Error.stack);
            }
            return { images: [] };
          }
        } else {
          // No credentials - return empty array
          // You can add credentials to .env to enable automatic listing
          console.warn(
            "[Gallery] R2 credentials not configured. Add R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, and R2_BUCKET_NAME to enable automatic image listing.",
          );
          return { images: [] };
        }
      } catch (error) {
        console.error("[Gallery] Error fetching gallery images:", error);
        if (error instanceof Error) {
          console.error("[Gallery] Error message:", error.message);
          console.error("[Gallery] Error stack:", error.stack);
        }
        return { images: [] };
      }
    },
  ),
});
