const express = require("express"); //to get express overall
const router = express.Router(); //to get express router
const { requireAuth } = require("../Middleware/auth");
const {
  postCourse,
  getAll,
  getSpecific,
} = require("../Controllers/course_controller"); //import from controllers

// All routes require authentication
router.use(requireAuth);

//POST request to create a Course
router.post("/add", postCourse);

//GET all courses
router.get("/getall", getAll);

//GET specific course by ID
router.get("/:id", getSpecific);

module.exports = router;
