// const { Sequelize, DataTypes } = require('sequelize');
// const { sequelize } = require('../config/database');

// const User = sequelize.define('User', {
//   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, allowNull: false, unique: true },
//   password: { type: DataTypes.STRING, allowNull: false },
//   role: { type: DataTypes.ENUM('customer', 'admin'), defaultValue: 'customer' },
// }, { timestamps: true });

// module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // adjust path as needed

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'customer'
  }
});

module.exports = User;
