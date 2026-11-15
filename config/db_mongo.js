const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI || "mongodb://localhost:27017/local"
        );

        console.log("connection to MongoDB established");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = connectDB;