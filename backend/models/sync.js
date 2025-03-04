const { sequelize } = require('./config/database');
const { User, Car, Booking, Payment } = require('./models');

(async () => {
  try {
    await sequelize.sync({ force: true }); // Use force: true only for development (resets DB)
    console.log("Database synced successfully!");
    process.exit();
  } catch (error) {
    console.error("Error syncing database:", error);
    process.exit(1);
  }
})();