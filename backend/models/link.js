const User = require('./User');
const Car = require('./Car');
const Booking = require('./Booking');
const Payment = require('./Payment');

// Relationships
User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

Car.hasMany(Booking, { foreignKey: 'carId' });
Booking.belongsTo(Car, { foreignKey: 'carId' });

Booking.hasOne(Payment, { foreignKey: 'bookingId' });
Payment.belongsTo(Booking, { foreignKey: 'bookingId' });

module.exports = { User, Car, Booking, Payment };