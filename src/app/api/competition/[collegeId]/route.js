import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET (req,{params}){
    const collegeId = params.collegeId;
    
    try{

        const competitions = await prisma.competition.findMany({
            where:{ 
                collegeId
            },
            include:{
                participants:true,
                team:true

            },
        })
        console.log(competitions);
        return NextResponse.json({message:"success",competitions})

    }catch(err){
        return NextResponse.json({message:"error",err:err.message})

    }
}