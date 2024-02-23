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
      return NextResponse.json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordIsValid = await bcrypt.compare(
      password,
      applicant.passwordHash
    );

    if (!passwordIsValid) {
      // If the passwords do not match, return an error
      return NextResponse.json({ message: "Invalid email or password" });
    }

    // If the passwords match, generate a JWT
    const token = jwt.sign({ id: applicant.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Return the JWT in the response
    const response = NextResponse.json({ message: "success", token });
    response.cookies.set({
      name: "token",
      value: token,
      options: {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60, // 1 hour
        path: "/",
      },
    });
    return response;
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};
