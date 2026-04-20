import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Service from '@/models/Service';
import jwt from 'jsonwebtoken';

const authenticate = (req) => {
  const token = req.headers.get('authorization');
  try { return jwt.verify(token, process.env.JWT_SECRET || 'secret'); } catch { return false; }
};

export async function GET(request) {
  await dbConnect();
  const services = await Service.find().sort({ order: 1 });
  return NextResponse.json(services);
}

export async function POST(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const data = await request.json();
  const service = await Service.create(data);
  return NextResponse.json(service);
}

export async function PUT(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { id, ...data } = await request.json();
  const updated = await Service.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await Service.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted' });
}
