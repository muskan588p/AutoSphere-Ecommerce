// // const { Booking, Car } = require("../models");


// // exports.getAllBookings = async (req, res) => {
// //   try {
// //     const bookings = await Booking.findAll({ include: Car });
// //     res.json(bookings);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to fetch bookings" });
// //   }
// // };


// // exports.bookCar = async (req, res) => {
// //   try {
// //     const { userId, carId, startDate, endDate, totalPrice } = req.body;
    
// //     // Check if car is available
// //     const car = await Car.findByPk(carId);
// //     if (!car || !car.available) return res.status(400).json({ error: "Car not available" });

// //     // Create Booking
// //     const booking = await Booking.create({ userId, carId, startDate, endDate, totalPrice, status: "pending" });

// //     // Mark Car as Unavailable
// //     await Car.update({ available: false }, { where: { id: carId } });

// //     res.status(201).json(booking);  //new booking as a JSON response
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to book car" });
// //   }
// // };


// // exports.cancelBooking = async (req, res) => {
// //   try {
// //     const { id } = req.params; //to extract id from the request URL
// //     const booking = await Booking.findByPk(id);

// //     if (!booking) return res.status(404).json({ error: "Booking not found" });

// //     //update car availability after cancelling
// //     await Car.update({ available: true }, { where: { id: booking.carId } });

// //     //delete booking
// //     await booking.destroy();
    
// //     res.json({ message: "Booking cancelled successfully" });
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to cancel booking" });
// //   }
// // };

// const { Booking, Car } = require("../models");


// exports.getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.findAll({ include: Car });
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch bookings" });
//   }
// };


// exports.bookCar = async (req, res) => {
//   try {
//     const { userId, carId, startDate, endDate, totalPrice } = req.body;
    
//     // Check if car is available
//     const car = await Car.findByPk(carId);
//     if (!car || !car.available) return res.status(400).json({ error: "Car not available" });

//     // Create Booking
//     const booking = await Booking.create({ userId, carId, startDate, endDate, totalPrice, status: "pending" });

//     // Mark Car as Unavailable
//     await Car.update({ available: false }, { where: { id: carId } });

//     res.status(201).json(booking);  //new booking as a JSON response
//   } catch (error) {
//     res.status(500).json({ error: "Failed to book car" });
//   }
// };


// exports.cancelBooking = async (req, res) => {
//   try {
//     const { id } = req.params; //to extract id from the request URL
//     const booking = await Booking.findByPk(id);

//     if (!booking) return res.status(404).json({ error: "Booking not found" });

//     //update car availability after cancelling
//     await Car.update({ available: true }, { where: { id: booking.carId } });

//     //delete booking
//     await booking.destroy();
    
//     res.json({ message: "Booking cancelled successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to cancel booking" });
//   }
// };


const { Booking } = require("../models");

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

// Create a new booking
exports.bookCar = async (req, res) => {
  try {
    const {
      username,
      car,        // expecting { name, price }
      date,
      time,
      duration,
      totalPrice,
    } = req.body;

    // Save booking to database
    const newBooking = await Booking.create({
      username,
      carName: car.name,
      carPrice: car.price,
      bookingDate: date,
      bookingTime: time,
      duration,
      totalPrice,
      status: "confirmed",
    });

    res.status(201).json({ message: "Booking confirmed", booking: newBooking });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ error: "Failed to save booking" });
  }
};

// Cancel a booking
exports.cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    await booking.destroy();
    res.json({ message: "Booking cancelled successfully" });
  } catch (error) {
    console.error("Error cancelling booking:", error);
    res.status(500).json({ error: "Failed to cancel booking" });
  }
};
