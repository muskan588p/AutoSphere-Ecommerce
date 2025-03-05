const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const User = require("./user");
const Car = require("./car");

const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Car,
      key: "id",
    },
  },
  rentalDays: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Minimum 1 day rental
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

User.hasMany(Cart, { foreignKey: "userId", onDelete: "CASCADE" });
Cart.belongsTo(User, { foreignKey: "userId" });

Car.hasMany(Cart, { foreignKey: "carId", onDelete: "CASCADE" });
Cart.belongsTo(Car, { foreignKey: "carId" });

module.exports = Cart;
