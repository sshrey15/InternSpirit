import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import validator from "validator";
import jwt from "jsonwebtoken";

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
    const passwordHash = await bcrypt.hash(password, 10);
    const token =jwt.sign({firstName, lastName, email,passwordHash, collegeId}, process.env.JWT_SECRET,{expiresIn: '1h'})

    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Welcome to CollegeRecruiter",
      html: `
        <h1>Welcome to CollegeRecruiter, ${firstName}!</h1>
        <p>To verify your email, please click the button below:</p>
        <a href="http://localhost:3000/api/confirmEmail/${token}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block;">Verify Email</a>
      `
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

    // const applicant = await prisma.applicant.create({
    //   data: {
    //     firstName,
    //     lastName,
    //     email,
    //     passwordHash,
    //     collegeId,
    //   },
    // });

    return NextResponse.json({ message: "Check your email to verify your account", token });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};
