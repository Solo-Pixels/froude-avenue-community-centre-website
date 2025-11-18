import { PrismaClient } from "@prisma/client";
import { readFileSync } from "fs";
import { join } from "path";

const prisma = new PrismaClient({
  log: ["query", "error", "warn"],
});

async function seedPrograms() {
  console.log("📋 Seeding programs...");
  const sqlFilePath = join(process.cwd(), "seed", "programs.sql");
  let sql = readFileSync(sqlFilePath, "utf-8");
  sql = sql
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n")
    .trim();
  await prisma.$executeRawUnsafe(sql);
  const count = await prisma.program.count();
  console.log(`✅ Programs seeded. Total: ${count}`);
}

async function seedServices() {
  console.log("🔧 Seeding services...");
  const sqlFilePath = join(process.cwd(), "seed", "service.sql");
  let sql = readFileSync(sqlFilePath, "utf-8");
  sql = sql
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n")
    .trim();
  await prisma.$executeRawUnsafe(sql);
  const count = await prisma.service.count();
  console.log(`✅ Services seeded. Total: ${count}`);
}

async function seedStaff() {
  console.log("👥 Seeding staff...");
  const sqlFilePath = join(process.cwd(), "seed", "staff.sql");
  let sql = readFileSync(sqlFilePath, "utf-8");
  sql = sql
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n")
    .trim();
  await prisma.$executeRawUnsafe(sql);
  const count = await prisma.staff.count();
  console.log(`✅ Staff seeded. Total: ${count}`);
}

async function main() {
  console.log("🌱 Starting real data seed process...");
  console.log(
    `📊 Database URL: ${process.env.DATABASE_URL?.replace(/:[^:@]+@/, ":****@") ?? "Not set"}`,
  );

  try {
    // Test database connection
    await prisma.$connect();
    console.log("✅ Database connection established\n");

    // Seed all data in sequence
    await seedPrograms();
    console.log();
    await seedServices();
    console.log();
    await seedStaff();
    console.log();

    // Final summary
    const programCount = await prisma.program.count();
    const serviceCount = await prisma.service.count();
    const staffCount = await prisma.staff.count();

    console.log("📊 Final Summary:");
    console.log(`   Programs: ${programCount}`);
    console.log(`   Services: ${serviceCount}`);
    console.log(`   Staff: ${staffCount}`);
    console.log("\n🎉 Real data seed process completed successfully!");
  } catch (error) {
    console.error("❌ Error during seed:", error);
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

