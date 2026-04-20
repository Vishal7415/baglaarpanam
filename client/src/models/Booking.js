import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  problem: { type: String, required: true },
  date: { type: Date, required: true },
  mode: { type: String, enum: ['online', 'offline'], default: 'offline' },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  payment: {
    status: { type: String, default: 'unpaid' },
    transactionId: String,
    amount: Number
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
