import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Booking from '@/models/Booking';
import jwt from 'jsonwebtoken';

const authenticate = (req) => {
  const token = req.headers.get('authorization');
  try { return jwt.verify(token, process.env.JWT_SECRET || 'secret'); } catch { return false; }
};

export async function GET(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const bookings = await Booking.find().sort({ createdAt: -1 });
  return NextResponse.json(bookings);
}

export async function PATCH(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { id, ...data } = await request.json();
  const updated = await Booking.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  await Booking.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted' });
}
