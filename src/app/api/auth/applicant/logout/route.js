import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
  try {
    const response = NextResponse.json({ message: "token empty", token: "" });
    response.cookies.set({
      name: "token",
      value: "",
      options: {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      },
    });
    return response;
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};
