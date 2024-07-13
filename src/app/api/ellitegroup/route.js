import {NextResponse, NextRequest} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
      const eliteGroup = await prisma.eliteGroup.findMany({
        include: {
          applicants: true,
          admins: true,
          roles: true,
          
        },
      });
  
      return NextResponse.json({ message: "success", eliteGroup });
    } catch (error) {
        return NextResponse.json({ message: "error", error: error.message });
    }

}


export async function POST(req,res){
    const {name, description,collegeId} = await req.json();
    console.log(name,description,collegeId)
    try{
        const eliteGroups = await prisma.eliteGroup.create({
            data:{
                name,
                description,
                collegeId
            }
            
        })
        return NextResponse.json({message:"success",eliteGroups})
    }
    catch(error){
        return NextResponse.json({message:"error",error:error.message})
    }
}
