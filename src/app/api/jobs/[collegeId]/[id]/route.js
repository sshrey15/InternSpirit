import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  const id = params.id;
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("applicantCookie").value;

    console.log(token);

    if (!token) {
      return NextResponse.json({ message: "error", err: "No token found" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ message: "error", err: err.message });
    }

    const job = await prisma.job.findUnique({
        where: {
            id,
          },
          
          include: {
            college: true,
            applications: true,
            college: true,
            employer: true,
            company: true,
          },
    });
    console.log(job);
    return NextResponse.json({ message: "success", job });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "error", err: err.message });
  }
};