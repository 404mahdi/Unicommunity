const express = require("express");
const router = express.Router();
const { requireAuth, requireOwnership } = require("../Middleware/auth");
const {
  getCGPAData,
  addCourse,
  updateCourse,
  deleteCourse,
  getExportData,
  exportToGoogleSheets,
  resetCalculator,
  syncProfileCoursesToCgpa,
} = require("../Controllers/cgpa_controllers");

// All routes require authentication
router.use(requireAuth);

// POST request to export data to Google Sheets (must come before /:userId/export)
router.post("/:userId/export/sheets", requireOwnership(), exportToGoogleSheets);

// GET request to get export data for Google Sheets (must come before /:userId)
router.get("/:userId/export", requireOwnership(), getExportData);

// PUT request to resync CGPA with completed courses (manual trigger if needed)
router.put("/:userId/sync", requireOwnership(), async (req, res) => {
  try {
    const data = await syncProfileCoursesToCgpa(req.params.userId);
    if (!data) return res.status(404).json({ error: "User not found" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE request to reset calculator (must come before /:userId)
router.delete("/:userId/reset", requireOwnership(), resetCalculator);

// POST request to add a course
router.post("/:userId/courses", requireOwnership(), addCourse);

// PUT request to update a course
router.put("/:userId/courses/:courseId", requireOwnership(), updateCourse);

// DELETE request to delete a course
router.delete("/:userId/courses/:courseId", requireOwnership(), deleteCourse);

// GET request to get user's CGPA calculator data
router.get("/:userId", getCGPAData);

module.exports = router;
