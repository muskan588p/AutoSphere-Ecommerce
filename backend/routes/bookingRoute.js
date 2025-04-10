const express = require("express");
const { getAllBookings, bookCar, cancelBooking } = require("../controllers/booking");

const router = express.Router();

router.get("/", getAllBookings);
router.post("/", bookCar);
router.delete("/:id", cancelBooking);

module.exports = router;