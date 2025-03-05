const { Cart, Car } = require("../models");

exports.getCartItems = async (req, res) => {
  try {
    const userId = req.params.userId; 
    const cartItems = await Cart.findAll({ where: { userId }, include: Car });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { userId, carId, rentalDays } = req.body;

    // Check if the car exists
    const car = await Car.findByPk(carId);
    if (!car) return res.status(404).json({ error: "Car not found" });

    const totalPrice = car.pricePerDay * rentalDays;

    // Add car to cart
    const cartItem = await Cart.create({ userId, carId, rentalDays, totalPrice });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add car to cart" });
  }
};

//Update Cart Item (Change Rental Days)
exports.updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { rentalDays } = req.body;

    const cartItem = await Cart.findByPk(id);
    if (!cartItem) return res.status(404).json({ error: "Cart item not found" });

    // Update rental days and total price
    const car = await Car.findByPk(cartItem.carId);
    const updatedTotalPrice = car.pricePerDay * rentalDays;

    await Cart.update({ rentalDays, totalPrice: updatedTotalPrice }, { where: { id } });

    res.json({ message: "Cart item updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart item" });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cart.destroy({ where: { id } });

    deleted ? res.json({ message: "Cart item removed" }) : res.status(404).json({ error: "Cart item not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const { userId } = req.params;
    await Cart.destroy({ where: { userId } });
    res.json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
};
