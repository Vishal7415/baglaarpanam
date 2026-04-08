require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const Booking = require('./models/Booking');
const Service = require('./models/Service');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// --- API Routes ---

// 1. Fetch all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find().sort({ order: 1 });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Create a new booking
app.post('/api/book', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. Razorpay: Create Order
app.post('/api/payment/create-order', async (req, res) => {
  const { amount, currency = 'INR', receipt } = req.body;
  try {
    const options = {
      amount: amount * 100, // in paise
      currency,
      receipt
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Admin - Manage Services
app.post('/api/admin/services', async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json({ message: 'Service added successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Health check
app.get('/', (req, res) => res.send('Baglarpanam API running...'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
