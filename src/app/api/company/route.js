import { NextResponse, NextRequest } from "next/server";
import { PismaClient, PrismaClient } from "@prisma/client";
import { New_Tegomin } from "next/font/google";

const prisma = new PrismaClient();

/*
    model Company {
  id        String     @id @default(uuid())
  name      String
  location  String
  employers Employer[]
  jobs      Job[]
}
*/

export const GET = async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      include: {
        employers: true,
        jobs: true,
      },
    });
    return NextResponse.json({ message: "success", companies });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};

export const POST = async (req, res) => {
  try {
    const { name, location } = await req.json();
    const company = await prisma.company.create({
      data: {
        name,
        location,
      },
    });
    const response = NextResponse.json({ message: "success", company });
    return response;
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
    
  }

};
