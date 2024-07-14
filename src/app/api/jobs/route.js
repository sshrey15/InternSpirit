import jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { formatDistanceToNow } from 'date-fns';



const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      include: {
        college: true,
        applications: true,
        college: true,
        employer: true,
        company: true,
      },
    });

    const jobsWithDatesInWords = jobs.map(job => ({
      ...job,
      postedAt: formatDistanceToNow(new Date(job.postedAt), { addSuffix: true }),
      expiresAt: formatDistanceToNow(new Date(job.expiresAt), { addSuffix: true }),
    }));

    return NextResponse.json({ message: "success", jobs: jobsWithDatesInWords });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
};
//PUT, DELETE,

export const POST = async (req) => {
  const cookieStore = cookies();
  const employerCookie = cookieStore.get("employerCookie").value;
  console.log("employercookie: ",employerCookie);
  let employerId;
  let companyId;
  try {
    const decodedToken = jwt.verify(employerCookie, process.env.JWT_SECRET);
    employerId = decodedToken.id;
    companyId = decodedToken.companyId;
  } catch (err) {
    if (!employerCookie || typeof employerCookie !== 'string') {
      console.log('Invalid or missing employerCookie:', employerCookie);
      return NextResponse.json({ message: "Invalid or missing token" });
    }
  }

  console.log(employerId, companyId);
  const { title, description, expiresAt, skills, collegeId, type } =
    await req.json();

  try {
    let colleges;
    console.log(collegeId);
    if (!collegeId) {
      // If collegeIds is not provided, fetch all colleges
      colleges = await prisma.college.findMany();
    } else if (Array.isArray(collegeId)) {
      // If collegeIds is an array, fetch those colleges
      colleges = await prisma.college.findMany({
        where: {
          id: {
            in: collegeId,
          },
        },
        
      });
      console.log(colleges);
    } else {
      // If collegeIds is a single value, fetch that college
      colleges = await prisma.college.findMany({
        where: {
          id: collegeId,
        },
      });
    }

    // Create a job for each college
    const jobs = await Promise.all(
      colleges.map(async (college) => {
        return prisma.job.create({
          data: {
            title,
            description,
            skills,
            expiresAt,
            companyId,
            collegeId: college.id,
            type,
            employerId,
          },
        });
      })
    );

    return NextResponse.json({ message: "success", jobs });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
};