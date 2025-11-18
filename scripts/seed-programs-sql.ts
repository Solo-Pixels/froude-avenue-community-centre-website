import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { join } from "path";

const prisma = new PrismaClient({
  log: ["query", "error", "warn"],
});

async function main() {
  console.log("🌱 Starting SQL seed process for programs...");
  console.log(
    `📊 Database URL: ${process.env.DATABASE_URL?.replace(/:[^:@]+@/, ":****@") ?? "Not set"}`,
  );

  try {
    // Test database connection
    await prisma.$connect();
    console.log("✅ Database connection established");

    // Read the SQL file
    const sqlFilePath = join(process.cwd(), "seed", "programs.sql");
    let sql = readFileSync(sqlFilePath, "utf-8");

    // Remove comments and clean up
    sql = sql
      .split("\n")
      .filter((line) => !line.trim().startsWith("--"))
      .join("\n")
      .trim();

    // Execute the SQL (it's a single INSERT statement with multiple values)
    console.log("📝 Executing SQL statements...");
    await prisma.$executeRawUnsafe(sql);

    // Verify the data
    const programCount = await prisma.program.count();
    console.log(`✅ Programs inserted. Total programs in database: ${programCount}`);

    console.log("\n🎉 SQL seed process completed successfully!");
  } catch (error) {
    console.error("❌ Error during SQL seed:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

