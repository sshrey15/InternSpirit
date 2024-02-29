import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function GET(req, {params}){
    const token = params.token;
    console.log(token);


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
          return NextResponse.redirect('http://localhost:3000/');

    }catch(err){
        console.log(err);
        return NextResponse.json({message: "error", err: err.message})
    }
}