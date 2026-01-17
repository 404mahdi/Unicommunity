const express = require("express");
const router = express.Router();
const { requireAuth } = require("../Middleware/auth");
const {
  createInstructorReview,
  getInstructorReviews,
  getInstructorReviewByName,
  searchInstructorReviews,
} = require("../Controllers/instructor_review_controllers");

// All routes require authentication
router.use(requireAuth);

router.post("/", createInstructorReview);
router.get("/all", getInstructorReviews);
router.get("/search", searchInstructorReviews);
router.get("/:instructorName", getInstructorReviewByName);

module.exports = router;
