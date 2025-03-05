const { User } = require("../models");

//Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

//Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

//Add a New User (Manually)
exports.addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = await User.create({ name, email, phone });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
};

//Update User Details
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await User.update(req.body, { where: { id } });
    updated[0]
      ? res.json({ message: "User updated successfully" })
      : res.status(404).json({ error: "User not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

//Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    deleted
      ? res.json({ message: "User deleted successfully" })
      : res.status(404).json({ error: "User not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
