const { Sequelize } = require("sequelize");
// require("dotenv").config("../.env"); 
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST, 
    dialect: "mysql", 
    logging: false, 
    port: process.env.DB_PORT,
  }
);

// Test Database Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();

module.exports = { sequelize };
