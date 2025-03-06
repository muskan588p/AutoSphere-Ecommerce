const express = require("express");
const { sequelize } = require("./config/database");
const carRoutes = require("./routes/carRoute");
const bookingRoutes = require("./routes/bookingRoute");
const paymentRoutes = require("./routes/paymentRoute");

const app = express();
app.use(express.json());

app.use("/cars", carRoutes);
app.use("/bookings", bookingRoutes);
app.use("/payments", paymentRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});