import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import validator from "validator";

let transporter = nodemailer.createTransport({
  service: 'gmail',
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

    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome to CollegeRecruiter",
      text: `Welcome to CollegeRecruiter, ${firstName}!`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return NextResponse.json({ message: "error", err: err.message });
      } else {
        console.log("Email sent: " + info.response);
      }
    });

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
