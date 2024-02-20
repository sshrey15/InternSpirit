// delete.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.jobApplication.deleteMany();
  await prisma.job.deleteMany();
  await prisma.employer.deleteMany();
  await prisma.company.deleteMany();
  await prisma.education.deleteMany();
  await prisma.personalInfo.deleteMany();
  await prisma.college.deleteMany();
  await prisma.applicant.deleteMany();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });