// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/database");

// const Booking = sequelize.define("Booking", {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   userId: { type: DataTypes.INTEGER, allowNull: false },
//   carId: { type: DataTypes.INTEGER, allowNull: false },
//   startDate: { type: DataTypes.DATE, allowNull: false },
//   endDate: { type: DataTypes.DATE, allowNull: false },
//   totalPrice: { type: DataTypes.FLOAT, allowNull: false },
//   status: { type: DataTypes.ENUM("pending", "confirmed", "cancelled"), defaultValue: "pending" },
// });

// module.exports = Booking;


// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/database");

// const Booking = sequelize.define("Booking", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   carName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   carPrice: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   bookingDate: {
//     type: DataTypes.DATEONLY,
//     allowNull: false,
//   },
//   bookingTime: {
//     type: DataTypes.TIME,
//     allowNull: false,
//   },
//   duration: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   totalPrice: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
//     defaultValue: "confirmed",
//   },
// });

// module.exports = Booking;

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Booking = sequelize.define("Booking", {
  username: { type: DataTypes.STRING, allowNull: false },
  carName: { type: DataTypes.STRING, allowNull: false },
  carPrice: { type: DataTypes.FLOAT, allowNull: false },
  bookingDate: { type: DataTypes.STRING, allowNull: false },
  bookingTime: { type: DataTypes.STRING, allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  totalPrice: { type: DataTypes.FLOAT, allowNull: false },
  status: {
    type: DataTypes.ENUM("confirmed", "cancelled"),
    defaultValue: "confirmed",
  },
});

module.exports = Booking;

