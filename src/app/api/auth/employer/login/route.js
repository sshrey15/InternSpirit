import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { email, passwordHash } = await req.json();

    const employer = await prisma.employer.findUnique({
      where: { email },
    });

    if (!employer) {
      return NextResponse.json({ message: "Invalid email " });
    }

    const passwordIsValid = await bcrypt.compare(
      passwordHash,
      employer.password
    );

    if (!passwordIsValid) {
      return NextResponse.json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: employer.id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    const response = NextResponse.json({ message: "success", token });
    response.cookies.set({
      name: "employerCookie",
      value: token,
      options: {
        httpOnly: true,
        sameSite: "None",
        maxAge: 60 * 60, // 1 hour
        path: "/",
      },
    });
    return response;
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};
