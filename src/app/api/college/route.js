import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import cookie from "cookie";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {

    const cookies = cookie.parse(req.headers.get('Cookie') || '');
    const token = cookies['employerCookie'];
    if (!token) {
      return NextResponse.json({ message: "error", err: "No token found" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const employerId = decoded.id;

    const employer = await prisma.employer.findUnique({
        where: {
            id: employerId
        },
    })

    // if(!employer.subscriptionId){
    //     return NextResponse.json({ message: "error", err: "No subscription found", status: 404 });
    // }

    const colleges = await prisma.college.findMany({
      include: {
        jobs: true,
        applicants: {
          include:{
            skills: true
          }
        }
      },
    });
    return NextResponse.json({ message: "success", colleges });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};

export const POST = async (req, res) => {
  try {
    const { name, location } = await req.json();
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
