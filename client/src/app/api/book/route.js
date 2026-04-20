import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Booking from '@/models/Booking';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    // Validate if mandatory fields exist
    if (!data.name || !data.phone || !data.problem) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newBooking = await Booking.create({
      ...data,
      date: data.date ? new Date(data.date) : new Date(),
      status: 'pending',
      payment: { status: 'unpaid', amount: 5100 } // Default amount for booking
    });

    return NextResponse.json(newBooking, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
