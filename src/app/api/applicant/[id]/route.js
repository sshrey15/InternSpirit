import {NextResponse, NextRequest} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



export async function PUT(req, {params}){
    const id = params.id;
    const {roleId} = await req.json();
    const role = await prisma.role.findUnique({
        where:{
            id:roleId

        }
    })
    if(!role){
        return NextResponse.json({message:"error",error:"Role not found"})
    }
    try{
        const applicant = await prisma.applicant.update({
            where:{
                id
            },
            data:{
                roleId,
                eliteGroupId:role.eliteGroupId
            }
        })
        return NextResponse.json({message:"success",applicant})
    }
    catch(err){
        return NextResponse.json({message:"error",err:err.message})
    }
}