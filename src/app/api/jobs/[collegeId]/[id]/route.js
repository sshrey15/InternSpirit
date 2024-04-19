import {NextResponse,NextRequest} from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const GET = async (req, {params}) => {
    const id = params.id;
    try{
        const cookieStore = cookies();
        const token = cookieStore.get("applicantCookie").value;
        console.log(token);

        if (!token) {
            return NextResponse.json({ message: "error", err: "No token found" });
          }

        const jobDeails = await prisma.job.findUnique({
            where:{
                id
            },
            include:{

            }

        
        })
    } catch (error) {
        // Handle the error here
    }
}