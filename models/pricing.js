const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
    cargoType: { type: String, required: true },
    baseRate: { type: Number, required: true },
    ratePerKg: { type: Number, required: true },
    ratePerKm: { type: Number, required: true }
});

const pricingModel = mongoose.model('pricing', pricingSchema);
module.exports = pricingModel;