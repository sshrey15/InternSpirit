import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const colleges = await prisma.college.findMany({
      include: {
        jobs: true,
      },
    });
    return NextResponse.json({ message: "success", colleges });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};

export const POST = async (req, res) => {
  try {
    const { name, location, applicantId } = await req.json();
    const college = await prisma.college.create({
      data: {
        name,
        location,
      },
    });
    return NextResponse.json({ message: "success", college });
  } catch (err) {
    return NextResponse.json({ message: "err", err: err.message });
  }
};
