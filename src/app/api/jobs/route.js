import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
   
    const jobs = await prisma.job.findMany({
      include: {
        college: true,
        applications: true,
        college: true,
        employer: true,
      },
    });

    return NextResponse.json({ message: "suceess", jobs });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
};
//PUT, DELETE,

export const POST = async (req) => {
  const { title, description, skills, companyId, collegeId, type } =
    await req.json();
  try {
    const job = await prisma.job.create({
      data: {
        title,
        description,
        skills,
        companyId,
        collegeId,
        type,
      },
    });
    return NextResponse.json({ message: "success", job });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
};
