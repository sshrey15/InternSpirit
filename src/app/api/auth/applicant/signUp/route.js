import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import validator from "validator";
import jwt from "jsonwebtoken";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const prisma = new PrismaClient();

export const POST = async (req, res) => {
  try {
    const { firstName, lastName, email, password, collegeId } =
      await req.json();
    console.log(firstName, lastName, email, password, collegeId);
    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: "Invalid email" });
    }
    if (!validator.isLength(password, { min: 8 })) {
      return NextResponse.json({
        message: "Password must be at least 8 characters long",
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const token = jwt.sign(
      { firstName, lastName, email, passwordHash, collegeId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome to InternSpirit",
      html: `
      <div style="background-color: #f8f9fa; padding: 20px; text-align: center;">
        <img src="http://localhost:3000/path-to-your-logo.png" alt="InternSpirit Logo" style="width: 200px;"/>
        <h1 style="color: #343a40;">Welcome to InternSpirit, ${firstName}!</h1>
        <p style="
        color: #6c757d;
        font-size: 1.2rem;

        ">Welcome to InternSpirit, the premier college-based internship portal dedicated to empowering the next generation of professionals. Our mission is to provide students with unparalleled opportunities to discover and secure the perfect internships, launching them into successful careers. With InternSpirit, students gain access to a vast network of top-tier companies and organizations, offering diverse and enriching internship experiences tailored to their unique skills and aspirations. Whether you're a budding engineer, a future marketer, or an aspiring entrepreneur, InternSpirit is your ultimate partner in unlocking the doors to endless possibilities and charting the course towards a bright and fulfilling future. Join us on the journey to greatness, where your internship dreams become reality!</p>
        <p style="color: #6c757d;">To verify your email and start exploring opportunities, please click the button below:</p>
        <a href="http://localhost:3000/api/confirmEmail/${token}" style="background-color: #0A65CC; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin-top: 20px;">Verify Email</a>
      </div>
    `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return NextResponse.json({ message: "error", err: err.message });
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const existingApplicant = await prisma.applicant.findUnique({
      where: { email },
    });

    if (existingApplicant) {
      return NextResponse.json({ message: "Email already in use" });
    }

    const response = NextResponse.json({
      message: "Check your email to verify your account",
      token,
    });
    response.cookies.set({
      name: "applicant_signUp_Cookie",
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
