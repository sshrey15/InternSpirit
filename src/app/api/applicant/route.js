import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const applicants = await prisma.applicant.findMany({
      include: {
        educations: true,
        personalInfos: true,
        applications: true,
        skills: true,
      },
    });

    return NextResponse.json({ message: "success", applicants });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
};

// export const POST = async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       collegeId,
//       personalInfos,
//       educations,
//     } = await req.json();
//     const passwordHash = await bcrypt.hash(password, 10);

//     const existingApplicant = await prisma.applicant.findUnique({
//       where: { email },
//     });

//     const applicant = await prisma.applicant.create({
//       data: {
//         firstName,
//         lastName,
//         email,
//         passwordHash,
//         collegeId, // Generate a new UUID
//       },
//     });

//     const personalInfo = await prisma.personalInfo.create({
//       data: {
//         ...personalInfos,
//         applicantId: applicant.id,
//       },
//     });

//     //education requiers applicant id
//     const educationRecords = await Promise.all(
//       educations.map((education) =>
//         prisma.education.create({
//           data: {
//             ...education,
//             applicantId: applicant.id,
//           },
//         })
//       )
//     );

//     const response = NextResponse.json({
//       message: "success",
//       applicant,
//       personalInfo,
//       educations: educationRecords,
//     });

//     return response;
//   } catch (err) {
//     return NextResponse.json({ message: "error", err: err.message });
//   }
// };


export async function POST(req,res){
  const cookies = cookie.parse(req.headers.get('Cookie') || '');
  const token = cookies['applicantCookie'];

  if(!token){
      return NextResponse.json({message:"No token provided"})
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const applicantId = decoded.id;
  console.log("applicantiD", applicantId)

  const {personalInfos,educations} = await req.json();
  let education
 
  try{
    console.log("try ke andar ghus gaya")
    
      console.log("personalInfo ke andar")
      const personalInfo = await prisma.personalInfo.create({
        data:{
          ...personalInfos,
          applicantId: applicantId
          
        }
      })
      console.log("personalInfo", personalInfo)
    
  
    if(educations){
       education = await prisma.education.create({
        data:{
          ...educations,
          applicantId: applicantId
        }
      })
      console.log("education: ",education)
    }

 

    
    
   

    return NextResponse.json({message:"success",personalInfos,educations})

  }catch(err){
    return NextResponse.json({message:"error",err:err.message})
  }
}

