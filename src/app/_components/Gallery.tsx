import Image from "next/image";
import { api } from "@/trpc/server";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

const Gallery = async () => {
  let images: GalleryImage[] = [];

  try {
    // Type assertion needed until tRPC types regenerate after adding gallery router
    const galleryApi = api.gallery as {
      getAll: () => Promise<{ images: GalleryImage[] }>;
    };
    const result = await galleryApi.getAll();
    images = result?.images ?? [];
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    images = [];
  }

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id="gallery" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
          Gallery
        </h2>
        {images.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No images available at this time.
            </p>
          </div>
        ) : (
          <div className="relative overflow-hidden py-8">
            <div className="animate-slide-gallery flex gap-6">
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="relative h-80 w-[400px] shrink-0 overflow-hidden rounded-3xl shadow-xl transition-transform hover:scale-105 md:h-96 md:w-[480px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 400px, 480px"
                    className="rounded-2xl object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
