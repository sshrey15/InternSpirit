import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { email, password } = await req.json();

    // Find the applicant with the provided email
    const applicant = await prisma.applicant.findUnique({
      where: { email },
    });

    if (!applicant) {
      // If the applicant does not exist, return an error
      return NextResponse.json({ message: "Invalid email" });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordIsValid = await bcrypt.compare(
      password,
      applicant.passwordHash
    );

    if (!passwordIsValid) {
      // If the passwords do not match, return an error
      return NextResponse.json({ message: "Invalid password" });
    }

    // If the passwords match, generate a JWT
    const token = jwt.sign({ id: applicant.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // Return the JWT in the response
    const response = NextResponse.json({ message: "success", token, 
    status: 200
   });
    response.cookies.set({
      name: "applicantCookie",
      value: token,
      options: {
        httpOnly: true,
        sameSite: "None",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      },
    });
    return response;
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};