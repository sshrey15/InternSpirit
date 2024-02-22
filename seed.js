// seed.js
const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require('uuid')
const prisma = new PrismaClient();

async function main() {
    const newApplicant = await prisma.applicant.create({
        data: {
          id: uuidv4(), // Generate a new UUI
          firstName: "Vishnu",
          lastName: "Variyar",
          email: `VishnuVariyar${uuidv4()}@example.com`,
          passwordHash: "hashedpassword",
          collegeId: "123", // Generate a new UUID
       
                  },
      });

  const newCollege = await prisma.college.create({
    data: {
      id: "123",
      name: "Goa College of Engineering",
      location: "Goa, India",
      
    },
  });

  const newCompany = await prisma.company.create({
    data: {
      id: uuidv4(),
      name: "Creative Capsule Pvt. Ltd.",
      location: "Pune, India",
    },
  });

  const newEmployer = await prisma.employer.create({
    data: {
      id: uuidv4(),
      name: "Rohit Gupta",
      email: `Rohit${uuidv4()}@example.com`,
      companyId: newCompany.id,
    },
  });

  const newJob = await prisma.job.create({
    data: {
      id: uuidv4(),
      title: "Data Analyst",
      description: "We are looking for a QA Engineer to join our team!",
      companyId: newCompany.id,
      collegeId: newCollege.id,
      type: 'FULL_TIME', // Add the job type
      skills: ['Skill1', 'Skill2'], // Add the skills needed
    },
  });

 
  
  const newPersonalInfo = await prisma.personalInfo.create({
    data: {
      id: newApplicant.id, // Use the same UUID
      
      phone: "8265010448",
      address: "123 Street, City, Country",
      resume: "http://example.com/resume.pdf",
      linkedIn: "http://linkedin.com/in/username",
      github: "http://github.com/username",
      portfolio: "http://example.com/portfolio",
      skills: ["java", "Python"],
      experienceYears: 5,
      applicantId: newApplicant.id, // Use the same UUID
    },
  });

  const newEducation = await prisma.education.create({
    data: {
      id: uuidv4(),
      level: "bachlor's degree",
      field: "Computer Science and Engineering",
      institution: "Goa College of Engineering",
      year: 2022,
      applicantId: newApplicant.id,
    },
  });

  const newJobApplication = await prisma.jobApplication.create({
    data: {
      id: uuidv4(),
      jobId: newJob.id,
      applicantId: newApplicant.id,
      status: "Applied",
    },
  });

  console.log({
    newApplicant,
    newCollege,
    newCompany,
    newEmployer,
    newJob,
    newPersonalInfo,
    newEducation,
    newJobApplication,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });