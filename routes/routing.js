const express = require('express');
const { calculateShippingCost } = require('../controllers/calculatior');
const router = express.Router();

// POST route for shipping cost calculation
router.post('/calculate', calculateShippingCost);

module.exports = router;
