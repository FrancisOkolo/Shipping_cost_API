const express = require('express');
require('dotenv').config();
const routing = require('./routes/routing');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// connection to MongoDB..
const connectDB = () => {
    mongoose.connect(process.env.mongo_connection, {}).then(() =>{
    console.log('Connection to mongoDB successful');
})
.catch(() =>{
    console.log('Connection to mongoDB failed');
})
}

// Call the database connection function
connectDB();

require('./models/pricing');

app.use(express.json());
app.use(cors());

app.use('/api/shipping', routing);

app.listen(8000, () => {
    console.log('Server started');
}); 

module.exports = connectDB;