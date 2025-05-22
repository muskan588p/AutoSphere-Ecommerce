
// const express = require("express");
// const router = express.Router();

// router.post("/", (req, res) => {
//   console.log("Booking request received:", req.body);
//   res.status(200).json({ message: "Booking confirmed" });
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const db = require("../db"); // adjust if your db connection is in a different file

// router.post("/", (req, res) => {
//   const { username, car, date, time, duration, totalPrice } = req.body;

//   // Log the incoming data
//   console.log("Booking request received:", req.body);

//   // Check for missing fields
//   if (!username || !car || !car.name || !car.price || !date || !time || !duration || !totalPrice) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   const sql = `
//     INSERT INTO bookings (username, car_name, car_price, date, time, duration, total_price)
//     VALUES (?, ?, ?, ?, ?, ?, ?)
//   `;

//   const values = [username, car.name, car.price, date, time, duration, totalPrice];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error("MySQL insert error:", err);
//       return res.status(500).json({ error: "Database insert failed" });
//     }

//     console.log("Booking inserted with ID:", result.insertId);
//     res.status(200).json({ message: "Booking confirmed" });
//   });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Booking = require("../models/booking"); // Sequelize model

router.post("/", async (req, res) => {
  try {
    const { username, car, date, time, duration, totalPrice } = req.body;

    if (!username || !car || !car.name || !car.price || !date || !time || !duration || !totalPrice) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const booking = await Booking.create({
      username,
      carName: car.name,
      carPrice: car.price,
      bookingDate: date,
      bookingTime: time,
      duration,
      totalPrice,
    });

    console.log("Booking saved:", booking.toJSON());
    res.status(200).json({ message: "Booking confirmed", booking });
  } catch (err) {
    console.error("Booking creation failed:", err);
    res.status(500).json({ error: "Database insert failed" });
  }
});

module.exports = router;

