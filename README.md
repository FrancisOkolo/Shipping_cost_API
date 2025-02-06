# Shipping Cost Calculator
## This is a RESTful API built with **Node.js** and **Express.js** that calculates shipping costs based on weight, distance, and cargo type. The API fetches pricing data from **MongoDB Atlas** for accurate cost estimation.

[![N|Solid] (https://github.com/FrancisOkolo/Shipping_cost_API/tree/main)


## 🚀 Features

- Calculate shipping costs dynamically
- Store pricing data in **MongoDB Atlas**
- Monitor data using **MongoDB Compass**
- Secure environment variables using `.env`
- Supports CORS for external API calls

## 📌 Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/FrancisOkolo/shipping_cost_API.git
   cd shipping_cost_API

2. **Install dependencies**
   ```sh
   npm install
   
3. **Create a .env file in the root directory and add your MongoDB connection URL:**
    ```env
    mongo_connection=your_mongodb_connection_string
⚠️ Note: The .env file is not included in this repository for security reasons. You'll need to provide your own MongoDB connection URL.

## ▶️ Running the API

* Start the server in development mode:
    ```sh
    npm run dev
(Uses nodemon for hot reloading)
* Start the server in production mode:
    ```sh
    npm start

## 🔗 API Endpoints
| Method | Endpoint        | Description                |
|--------|---------------|----------------------------|
| `POST` | `/api/shipping` | Calculate shipping cost    |
| `GET`  | `/api/pricing`  | Fetch current pricing data |

* Example request for POST /api/shipping:
    ```sh
    {
  "weight": 10,
  "distance": 100,
  "cargoType": "fragile"
    }
## 🛠️ Technologies Used
* Node.js – Server-side JavaScript runtime
* Express.js – Web framework for building APIs
* MongoDB Atlas – Cloud database for storage
* Mongoose – ODM for MongoDB
* Dotenv – Manage environment variables
* CORS – Enable cross-origin requests
* Nodemon – Auto-restart server on changes

## 🤝 Contributing
Feel free to fork this repository and submit pull requests!
## 📜 License
    ```
    This README provides clear setup instructions, mentions MongoDB Atlas & Compass, and includes a security note about the `.env` file. Let me know if you need modifications! 🚀
