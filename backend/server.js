const express = require("express");
const { sequelize } = require("./config/database");
const carRoutes = require("./routes/carRoute");
const bookingRoutes = require("./routes/bookingRoute");
const paymentRoutes = require("./routes/paymentRoute");
const authRoutes = require("./routes/auth");
const cors = require('cors');

require("dotenv").config();
const app = express();
// Middleware
app.use(cors()); // 👈 Allow requests from frontend
app.use(express.json());

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