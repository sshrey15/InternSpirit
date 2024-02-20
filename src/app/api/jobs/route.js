import {NextRequest, NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();

// model Job {
//     id          String     @id @default(uuid())
//     title       String
//     description String
//     postedAt    DateTime @default(now())
//     companyId   String
//     company     Company  @relation(fields: [companyId], references: [id])
//     applications JobApplication[]
//     collegeId   String
//     college      College  @relation(fields: [collegeId], references: [id])
//     employer    Employer[]
//     type        JobType
//     skills     String[]
//   }
  

export const GET =async (req,res) => {
    
    try{
        const jobs = await prisma.job.findMany({
            include:{
                college: true,
                applications: true,
                college: true,
                employer: true,
            }
        });

        return NextResponse.json({message:"suceess", jobs})
    }catch(err){
        console.log(err);
        return NextResponse.json({message:"error", err: err.message})

    }
}
//PUT, DELETE,

export const POST = async (req)=>{
    const {title, description, skills, companyId, collegeId, type} = await req.json();
    try{
        const job= await prisma.job.create({
            data:{
                title,
                description,
                skills,
                companyId,
                collegeId,
                type,
            }
        })
        return NextResponse.json({message:"success", job})
    }catch(err){
        console.log(err);
        return NextResponse.json({message:"error", err: err.message})
    }
}