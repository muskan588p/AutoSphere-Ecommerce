const { Payment, Booking } = require("../models");

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({ include: Booking });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payments" });
  }
};

exports.processPayment = async (req, res) => {
  try {
    const { bookingId, amount, paymentMethod } = req.body;

    // Check if booking exists
    const booking = await Booking.findByPk(bookingId);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    // Create payment record
    const payment = await Payment.create({ bookingId, amount, paymentMethod, status: "completed" });

    // Confirm booking
    await Booking.update({ status: "confirmed" }, { where: { id: bookingId } });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
};