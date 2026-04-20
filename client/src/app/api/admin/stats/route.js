import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Booking from '@/models/Booking';
import Inquiry from '@/models/Inquiry';
import jwt from 'jsonwebtoken';

const authenticate = (req) => {
  const token = req.headers.get('authorization');
  if (!token) return false;
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret');
  } catch (err) { return false; }
};

export async function GET(request) {
  if (!authenticate(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  await dbConnect();
  try {
    const totalBookings = await Booking.countDocuments();
    const confirmedBookings = await Booking.countDocuments({ status: 'confirmed' });
    const pendingBookings = await Booking.countDocuments({ status: 'pending' });
    
    const revenueData = await Booking.aggregate([
        { $match: { 'payment.status': 'paid' } },
        { $group: { _id: null, total: { $sum: '$payment.amount' } } }
    ]);
    const totalRevenue = revenueData.length > 0 ? revenueData[0].total : 0;
    const newInquiries = await Inquiry.countDocuments({ status: 'new' });

    return NextResponse.json({
        totalBookings,
        confirmedBookings,
        pendingBookings,
        totalRevenue,
        newInquiries
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
