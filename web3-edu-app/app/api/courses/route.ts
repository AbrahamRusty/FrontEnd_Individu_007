import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all courses
export async function GET() {
  try {
    const courses = await prisma.course.findMany();
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}

// POST new course
export async function POST(request: NextRequest) {
  try {
    const { title, description, level, duration } = await request.json();
    
    const course = await prisma.course.create({
      data: { title, description, level, duration: parseInt(duration) }
    });
    
    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}