import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const applicants = await prisma.applicant.findMany({
      include: {
        educations: true,
        personalInfos: true,
        applications: true,
      },
    });

    return NextResponse.json({ message: "success", applicants });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};

export const POST = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      collegeId,
      personalInfos,
      educations,
    } = await req.json();
    const passwordHash = await bcrypt.hash(password, 10);

    const existingApplicant = await prisma.applicant.findUnique({
      where: { email },
    });

    const applicant = await prisma.applicant.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
        collegeId, // Generate a new UUID
      },
    });

    const personalInfo = await prisma.personalInfo.create({
      data: {
        ...personalInfos,
        applicantId: applicant.id,
      },
    });

    //education requiers applicant id
    const educationRecords = await Promise.all(
      educations.map((education) =>
        prisma.education.create({
          data: {
            ...education,
            applicantId: applicant.id,
          },
        })
      )
    );

    const response = NextResponse.json({
      message: "success",
      applicant,
      personalInfo,
      educations: educationRecords,
    });

    return response;
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};


export const PUT = async 