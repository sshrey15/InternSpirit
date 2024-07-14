import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { formatDistanceToNow } from 'date-fns';


const prisma = new PrismaClient()

export const GET = async (req) => {
    try {
        const cookies = cookie.parse(req.headers.get('Cookie') || '');
        console.log(cookies);
      
        const token = cookies['employerCookie'];
        console.log(token)
  
        if (!token) {
            return NextResponse.json({ message: "No token provided" });
        }
  
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const employerId = decoded.id;

        let employer = await prisma.employer.findUnique({
            where: {
                id: employerId
            },
            select: {
                id: true,
                name: true,
                email: true,
                companyId: true,
                jobs: {
                    include:{
                        applications: true
                    }
                }
            }
        });
        console.log(employer)

        employer = {
            ...employer,
            jobs: employer.jobs.map(job => ({
                ...job,
                postedAt: formatDistanceToNow(new Date(job.postedAt), { addSuffix: true }),
                expiresAt: formatDistanceToNow(new Date(job.expiresAt), { addSuffix: true }),
            })),
        };

        const companyId = employer.companyId
        console.log(companyId)

        const company = await prisma.company.findUnique({
            where:{
                id: companyId
            }
        })

        return NextResponse.json({ message: "success", employer, company });
    } catch (err) {
        return NextResponse.json({ message: "error", err: err.message });
    }
}