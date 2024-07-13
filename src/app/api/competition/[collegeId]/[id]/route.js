import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const competitionId = params.id;
  try {
    const competition = await prisma.competition.findUnique({
      where: {
        id: competitionId,
      },
      include: {
        participants: true,
        team: true,
      },
    });
    return NextResponse.json({ message: "success", competition });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
}

export async function PATCH(req, { params }) {
  const competitionId = params.id;
  console.log(competitionId);
  const { name, applicantId } = await req.json();
  try {
    const participant = await prisma.participant.create({
      data: {
        name,
        applicantId,
        competitionId,
      },
    });
    return NextResponse.json({ message: "success", participant });
  } catch (err) {
    return NextResponse.json({ message: "error", err: err.message });
  }
}
