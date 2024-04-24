import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const GET = async (req) => {
    try{
        const subscriptions = await prisma.subscription.findMany({
            include:{
                employers: true,
            }
        });
        return NextResponse.json({message: "success", subscriptions});
    }catch(err){
        return NextResponse.json({message: "error", err: err.message});
    }
}