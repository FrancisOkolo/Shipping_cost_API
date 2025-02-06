const Pricing = require('./models/pricing');
const connectDB = require('./app');

const seedPricingData = async () => {
    await connectDB();

    const pricingData = [
        { cargoType: 'electronics', baseRate: 50, ratePerKg: 2, ratePerKm: 0.5 },
        { cargoType: 'furniture', baseRate: 80, ratePerKg: 3, ratePerKm: 0.7 },
        { cargoType: 'clothing', baseRate: 30, ratePerKg: 1, ratePerKm: 0.3 },
    ];

    await Pricing.insertMany(pricingData);
    console.log('✅ Pricing data added');
    process.exit();
};

seedPricingData();