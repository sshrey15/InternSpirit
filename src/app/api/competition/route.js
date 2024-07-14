import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";console.log("mummy ppapa")
const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const competitions = await prisma.competition.findMany({
      include: {
        participants: true,
        team: true,
      },
    });
    return NextResponse.json({ message: "success", competitions });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
}

export async function POST(req, res) {
  
  const cookieStore = cookies();
  
  const employerCookie = cookieStore.get("employerCookie").value;
  console.log("bala oh bala")
  let employerId;
  
  try {
    console.log("mummy ppapa")
    const decodedToken = jwt.verify(employerCookie, process.env.JWT_SECRET);
    console.log("decodedToken le bsdk sale: ", decodedToken);
    employerId = decodedToken.id;
    console.log("bsdk lavde mccccccccccccccc")
    console.log("decodedToken: ", decodedToken);
    console.log("employerId: ", employerId);
  } catch (err) {
    if (!employerCookie || typeof employerCookie !== "string") {
      console.log("Invalid or missing employerCookie:", employerCookie);
      return NextResponse.json({ message: "Invalid or missing token" });
    }
  }

  console.log(employerId);
  const {
    name,
    description,
    startDate,
    endDate,
    prize,
    entryFee,
    competitionType,
    collegeId,
  } = await req.json();

  try {
    let colleges;
    if (!collegeId) {
      // If collegeId is not provided, fetch all colleges
      colleges = await prisma.college.findMany();
    } else if (Array.isArray(collegeId)) {
      // If collegeId is an array, fetch those colleges
      colleges = await prisma.college.findMany({
        where: {
          id: {
            in: collegeId,
          },
        },
      });
    } else {
      // If collegeId is a single value, fetch that college
      colleges = await prisma.college.findMany({
        where: {
          id: collegeId,
        },
      });
    }

    // Create a competition for each college
    const competitions = await Promise.all(
      colleges.map(async (college) => {
        return prisma.competition.create({
          data: {
            name,
            description,
            startDate,
            endDate,
            prize,
            entryFee,
            competitionType,
            employerId,
            collegeId: college.id,
          },
        });
      })
    );

    return NextResponse.json({ message: "success", competitions });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
}
