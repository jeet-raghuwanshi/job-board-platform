// routes/companiesRoutes.js
import express, { Router } from "express";
import { rateLimit } from "express-rate-limit";
import {
  getCompanies,
  getCompanyById,
  getCompanyJobListing,
  getCompanyProfile,
  register,
  signIn,
  updateCompanyProfile,
} from "../controllers/companiesController.js";
import userAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

// IP rate limiter to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per 15 minutes
  standardHeaders: true, // Return rate limit info in the 'RateLimit-*' headers
  legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});

// Register a new company
router.post("/register", limiter, register);

// Company sign-in
router.post("/login", limiter, signIn);

// Get company profile
router.post("/get-company-profile", userAuth, getCompanyProfile);

// Get company job listings
router.post("/get-company-joblisting", userAuth, getCompanyJobListing);

// Get all companies
router.get("/", getCompanies);

// Get a single company by ID
router.get("/get-company/:id", getCompanyById);

// Update company profile
router.put("/update-company", userAuth, updateCompanyProfile);

export default router;