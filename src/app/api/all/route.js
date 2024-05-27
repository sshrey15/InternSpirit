import {NextRequest,NextResponse} from 'next/server'
import {PrismaClient} from '@prisma/client'
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API); 
async function generateSummary(allData, question){
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    
    const prompt = JSON.stringify(allData)+ question
    const result = await model.generateContent(prompt);
    const response = await result.response; 
    const text = response.text();
    console.log(text);
    return text;
}


export async function GET (req, res) {
  const prisma = new PrismaClient()
  try {
    const [applicants, colleges, employers] = await Promise.all([

        prisma.applicant.findMany({
            include: {
                college: true,
                skills: true,
                personalInfos: true,
                applications: true,
                educations: true
            }
        }),
        prisma.college.findMany({
          include: {
            jobs: true,
            applicants: {
              include:{
                skills: true
              }
            }
          },
        }),
        prisma.employer.findMany({
            include: {
                company: true
            }
        }),
        prisma.company.findMany()
    ])

    const allData = {applicants, colleges, employers}
    const question = "Which applicant is highly skilled in Java"
    console.log(allData)
    const geminiData = await generateSummary(JSON.stringify(allData)+ question)

    return NextResponse.json({ message: "benchod data aa gaya ", geminiData });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
}