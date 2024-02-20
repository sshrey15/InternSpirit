import {NextResponse, NextRequest} from 'next/server';
import {PrismaClient} from '@prisma/client';
import { New_Tegomin } from 'next/font/google';


const prisma = new PrismaClient();

export const GET = async (req, res) => {
    try{
        const applicants = await prisma.applicant.findMany({
            include:{
                personalInfos: true,
                college: true,
                educations: true
            }
        })
        return NextResponse.json({message : "success", applicants})

    }catch(err){
        return NextResponse.json({message: "error", err: err.message})
        
    }
    
}


export const POST = async (req, res)=>{
    try{
        const {personalInfos, college, educations} = await req.json();
        const applicant = await prisma.applicant.create({
            data:{
               
                college:{
                    create: college
                },
                educations:{
                    create: educations
                }
            },
            include:{
                personalInfos: true,
                college: true,
                educations: true
            }
        })
        return NextResponse.json({message: "success", applicant})

    }catch(err){
        return NextResponse.json({message:"err", err: err.message})

    }
}