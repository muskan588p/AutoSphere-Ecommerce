const express = require("express");
const { sequelize } = require("./config/database");
const carRoutes = require("./routes/carRoute");
const bookingRoutes = require("./routes/bookingRoute");
const paymentRoutes = require("./routes/paymentRoute");
const authRoutes = require("./routes/auth");
const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config();

// require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// const app = express();
// app.use(express.json());

app.use("/api/auth", authRoutes); 
app.use("/cars", carRoutes);
app.use("/bookings", bookingRoutes);
app.use("/payments", paymentRoutes);

app.get("/",  (req, res) => {
  res.send("Welcome to the Car Rental API!");
});

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }) // adjust as needed
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });