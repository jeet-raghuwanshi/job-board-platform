// server.js
import express from "express";
import dotenv from "dotenv"; // Load environment variables from .env file
import cors from "cors"; // Provides a middleware to handle Cross-Origin Resource Sharing (CORS)
import morgan from "morgan"; // HTTP request logger middleware
import bodyParser from "body-parser"; // Parses incoming request bodies

import xss from "xss-clean"; // Sanitize user input to prevent XSS attacks
import mongoSanitize from "express-mongo-sanitize"; // Sanitize user-supplied data to prevent MongoDB Operator Injection

import dbConnection from "./dbConfig/dbConnection.js"; // Import MongoDB connection
import router from "./routes/index.js"; // Import routes
import errorMiddleware from "./middlewares/errorMiddleware.js"; // Import error handling middleware

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8800; // Set the port to use

// MONGODB CONNECTION
dbConnection(); // Establish MongoDB connection

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(xss()); // Sanitize user input against XSS attacks
app.use(mongoSanitize()); // Sanitize user input against MongoDB Operator Injection
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.json({ limit: "10mb" })); // Limit the size of JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use(morgan("dev")); // Enable request logging in development mode

app.use(router); // Use the imported routes

// Error middleware
app.use(errorMiddleware); // Use the error handling middleware

app.listen(PORT, () => {
  console.log(`Dev Server running on port: ${PORT}`);
});