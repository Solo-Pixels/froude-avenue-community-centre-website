import { PrismaClient } from "@prisma/client";
import {
  staffSeedData,
  programSeedData,
  serviceSeedData,
  partnerSeedData,
} from "../seed/data.js";

const prisma = new PrismaClient({
  log: ["query", "error", "warn"],
});

async function main() {
  console.log("🌱 Starting seed process...");
  console.log(
    `📊 Database URL: ${process.env.DATABASE_URL?.replace(/:[^:@]+@/, ":****@") ?? "Not set"}`,
  );

  try {
    // Test database connection
    await prisma.$connect();
    console.log("✅ Database connection established");

    // Seed Staff
    console.log("📝 Seeding staff...");
    for (const staff of staffSeedData) {
      await prisma.staff.upsert({
        where: { email: staff.email ?? undefined },
        update: {},
        create: staff,
      });
    }
    const staffCount = await prisma.staff.count();
    console.log(`✅ Created/Updated staff members. Total: ${staffCount}`);

    // Seed Programs
    console.log("📝 Seeding programs...");
    for (const program of programSeedData) {
      await prisma.program.create({
        data: program,
      });
    }
    const programCount = await prisma.program.count();
    console.log(`✅ Created programs. Total: ${programCount}`);

    // Seed Services
    console.log("📝 Seeding services...");
    for (const service of serviceSeedData) {
      await prisma.service.create({
        data: service,
      });
    }
    const serviceCount = await prisma.service.count();
    console.log(`✅ Created services. Total: ${serviceCount}`);

    // Seed Partners
    console.log("📝 Seeding partners...");
    for (const partner of partnerSeedData) {
      await prisma.partner.create({
        data: partner,
      });
    }
    const partnerCount = await prisma.partner.count();
    console.log(`✅ Created partners. Total: ${partnerCount}`);

    // Verify all data
    const totalCount = staffCount + programCount + serviceCount + partnerCount;
    console.log(`\n📊 Verification:`);
    console.log(`   Staff: ${staffCount}`);
    console.log(`   Programs: ${programCount}`);
    console.log(`   Services: ${serviceCount}`);
    console.log(`   Partners: ${partnerCount}`);
    console.log(`   Total Records: ${totalCount}`);

    console.log("\n🎉 Seed process completed successfully!");
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
