import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🗑️  Starting seed deletion process...");

  // Delete in reverse order of dependencies (if any)
  console.log("📝 Deleting partners...");
  const deletedPartners = await prisma.partner.deleteMany({});
  console.log(`✅ Deleted ${deletedPartners.count} partners`);

  console.log("📝 Deleting services...");
  const deletedServices = await prisma.service.deleteMany({});
  console.log(`✅ Deleted ${deletedServices.count} services`);

  console.log("📝 Deleting programs...");
  const deletedPrograms = await prisma.program.deleteMany({});
  console.log(`✅ Deleted ${deletedPrograms.count} programs`);

  console.log("📝 Deleting staff...");
  const deletedStaff = await prisma.staff.deleteMany({});
  console.log(`✅ Deleted ${deletedStaff.count} staff members`);

  console.log("🎉 Seed deletion completed successfully!");
  console.log(
    `   Total deleted: ${deletedPartners.count + deletedServices.count + deletedPrograms.count + deletedStaff.count} records`,
  );
}

main()
  .catch((e) => {
    console.error("❌ Error during seed deletion:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

