import {NextResponse, NextRequest} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(req, res){
    const {name, description, eliteGroupId,applicants} = await req.json();
    try{
        const role = await prisma.role.create({
            data:{
                name,
                description,
                eliteGroupId,
                applicants,
            }
        })
        return NextResponse.json({message:"success",role})
        
    }
    catch(err){
        return NextResponse.json({message:"error",err:err.message})
}
}