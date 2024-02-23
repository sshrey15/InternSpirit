import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { firstName, lastName, email, password, collegeId } =
      await req.json();

    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: "Invalid email" });
    }
    if (!validator.isLength(password, { min: 8 })) {
      return NextResponse.json({
        message: "Password must be at least 8 characters long",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const existingApplicant = await prisma.applicant.findUnique({
      where: { email },
    });

    if (existingApplicant) {
      return NextResponse.json({ message: "Email already in use" });
    }

    const applicant = await prisma.applicant.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
        collegeId,
      },
    });

    return NextResponse.json({ message: "success", applicant });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};
