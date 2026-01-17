const express = require("express");
const router = express.Router();
const { requireAuth, requireOwnership } = require("../Middleware/auth");

const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getCurrentUser,
  getUserBadges,
  searchUsersByName,
} = require("../Controllers/user_controllers");

// All user routes require authentication
router.use(requireAuth);

// Public routes (any authenticated user)
router.get("/search", searchUsersByName);
router.get("/", getAllUsers);
router.get("/current", getCurrentUser);
router.get("/:userId", getUserProfile);
router.get("/:userId/badges", getUserBadges);

// Protected routes (must own the resource)
router.put("/:userId", requireOwnership(), updateUserProfile);

module.exports = router;
