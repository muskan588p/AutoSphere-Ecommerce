const express = require("express");
const { getAllCars, addCar, updateCar, deleteCar } = require("../controllers/car");

const router = express.Router();

router.get("/", getAllCars);
router.post("/", addCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

module.exports = router;