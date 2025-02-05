const Pricing = require('../models/pricing');

const calculateShippingCost = async (req, res) => {
    try {
        const { weight, distance, cargoType } = req.body;

        if (!weight || !distance || !cargoType) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Find the pricing details for the given cargo type
        const pricing = await Pricing.findOne({ cargoType });

        if (!pricing) {
            return res.status(404).json({ error: 'Cargo type pricing not found' });
        }

        // Calculate total cost
        const shippingCost =
            pricing.baseRate +
            weight * pricing.ratePerKg +
            distance * pricing.ratePerKm;

        res.json({ shippingCost: shippingCost.toFixed(2) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { calculateShippingCost };
