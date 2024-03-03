import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(req, {params}){
    const token = params.token;

    


    try{
        const {firstName, lastName, email,passwordHash, collegeId} = jwt.verify(token, process.env.JWT_SECRET);
        const existingApplicant = await prisma.applicant.findUnique({
            where: { email },
        
        })
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
          const response = NextResponse.json({ message: "success", token });
          response.cookies.set({
            name: "applicant_signUp_Cookie",
            value: token,
            options: {
              httpOnly: true,
              sameSite: "strict",
              maxAge: 60 * 60, // 1 hour
              path: "/",
            },
          });
          
          
          
          
        return   NextResponse.redirect(`http://localhost:3000/Login/student/${token}`);
    }catch(err){
        console.log(err);
        return NextResponse.json({message: "error", err: err.message})
    }
}