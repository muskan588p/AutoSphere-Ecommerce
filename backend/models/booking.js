const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Car = sequelize.define('Car', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  brand: { type: DataTypes.STRING, allowNull: false },
  model: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  pricePerDay: { type: DataTypes.FLOAT, allowNull: false },
  available: { type: DataTypes.BOOLEAN, defaultValue: true },
  imageUrl: { type: DataTypes.STRING, allowNull: true }
}, { timestamps: true });

module.exports = Car;
