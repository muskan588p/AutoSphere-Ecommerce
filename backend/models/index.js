const { sequelize } = require("../config/database");
const User = require("./User");
const Car = require("./Car");
const Booking = require("./Booking");
const Payment = require("./Payment");

// Relationships
User.hasMany(Booking, { foreignKey: "userId", onDelete: "CASCADE" });
Booking.belongsTo(User, { foreignKey: "userId" });

Car.hasMany(Booking, { foreignKey: "carId", onDelete: "CASCADE" });
Booking.belongsTo(Car, { foreignKey: "carId" });

Booking.hasOne(Payment, { foreignKey: "bookingId", onDelete: "CASCADE" });
Payment.belongsTo(Booking, { foreignKey: "bookingId" });

(async () => {
  try {
    await sequelize.sync({ force: false }); 
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

module.exports = { User, Car, Booking, Payment };