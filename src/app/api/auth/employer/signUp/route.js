import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import validator from "validator";

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { name, email, passwordHash, companyId } = await req.json();    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: "Invalid email" });
    }
    if (!validator.isLength(passwordHash, { min: 8 })) {
      return NextResponse.json({
        message: "Password must be at least 8 characters long",
      });
    }

    if (!passwordHash) {
        return NextResponse.json({ message: "Password is required" });
      }

    
    const password = await bcrypt.hash(passwordHash, 10);
    const existingEmployer = await prisma.employer.findUnique({
      where: { email },
    });

    if (existingEmployer) {
      return NextResponse.json({ message: "Email already in use" });
    }

    const employer = await prisma.employer.create({
      data: {
        name,
        email,
        password,
        companyId,
        
      },
    });
    return NextResponse.json({ message: "success", employer });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};
