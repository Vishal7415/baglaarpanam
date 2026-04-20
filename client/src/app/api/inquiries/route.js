import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Inquiry from '@/models/Inquiry';
import jwt from 'jsonwebtoken';

const authenticate = (req) => {
  const token = req.headers.get('authorization');
  try { return jwt.verify(token, process.env.JWT_SECRET || 'secret'); } catch { return false; }
};

export async function POST(request) {
  await dbConnect();
  const data = await request.json();
  const inquiry = await Inquiry.create(data);
  return NextResponse.json(inquiry);
}

export async function GET(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });
  return NextResponse.json(inquiries);
}

export async function PATCH(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { id, ...data } = await request.json();
  const updated = await Inquiry.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await Inquiry.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted' });
}
