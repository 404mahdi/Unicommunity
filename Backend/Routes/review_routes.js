const express = require("express"); //to get express overall
const router = express.Router(); //to get express router
const { requireAuth } = require("../Middleware/auth");
const {
  createReview,
  getReviews,
  getReviewByCourseId,
} = require("../Controllers/review_controllers"); //import from controllers

// All routes require authentication
router.use(requireAuth);

//POST request to create a new review
router.post("/", createReview);

//GET request to get all reviews
router.get("/all", getReviews);

//GET request to get a review by Course ID
router.get("/:courseId", getReviewByCourseId);

module.exports = router;
