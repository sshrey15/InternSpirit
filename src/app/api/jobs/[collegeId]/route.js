import {NextResponse, NextRequest} from 'next/server';
import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();
export const GET = async (req, {params}) => {
    const collegeId = params.collegeId;
    console.log(collegeId);
    try{
        const job = await prisma.job.findMany({
            where: {
                collegeId
            },
           
            
        });
        console.log(job);
        return NextResponse.json({message: "success", job })
    }catch(err){
        console.log(err);
        return NextResponse.json({message: "error", err: err.message})
    }
}

export const DELETE= async (req, {params}) => {
    const collegeId = params.collegeId;
    try{
        const jobs = await prisma.job.delete({
            where: {
                collegeId
            }
        });
        return NextResponse.json({message: "success", jobs })
    }catch(err){
        console.log(err);
        return NextResponse.json({message: "error", err: err.message})
    }
}