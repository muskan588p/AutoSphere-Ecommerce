const { Car } = require("../models");


exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};


exports.addCar = async (req, res) => {
  try {
    const { name, brand, model, year, pricePerDay, imageUrl } = req.body;
    const car = await Car.create({ name, brand, model, year, pricePerDay, available: true, imageUrl });
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ error: "Failed to add car" });
  }
};


exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Car.update(req.body, { where: { id } });
    updated[0] ? res.json({ message: "Car updated successfully" }) : res.status(404).json({ error: "Car not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update car" });
  }
};


exports.deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Car.destroy({ where: { id } });
    deleted ? res.json({ message: "Car deleted successfully" }) : res.status(404).json({ error: "Car not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete car" });
  }
};