const express = require("express");
const { getAllPayments, processPayment } = require("../controllers/payment");

const router = express.Router();

router.get("/", getAllPayments);
router.post("/", processPayment);

module.exports = router;
