// routes/jobsRoutes.js
import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJob,
  deleteJobPost,
  getJobById,
  getJobPosts,
  updateJob,
} from "../controllers/jobController.js";

const router = express.Router();

// Create a new job post
router.post("/upload-job", userAuth, createJob);

// Update an existing job post
router.put("/update-job/:jobId", userAuth, updateJob);

// Get job posts with search and filtering
router.get("/find-jobs", getJobPosts);

// Get a single job post by ID
router.get("/get-job-detail/:id", getJobById);

// Delete a job post
router.delete("/delete-job/:id", userAuth, deleteJobPost);

export default router;