const express = require("express");
const router = express.Router();
const { requireAuth } = require("../Middleware/auth");
const {
  createListing,
  listListings,
  joinListing,
  createTrelloForListing,
} = require("../Controllers/project_listing_controllers");

// All routes require authentication
router.use(requireAuth);

router.post("/", createListing);
router.get("/", listListings);
router.post("/:listingId/join", joinListing);
router.post("/:listingId/trello", createTrelloForListing);

module.exports = router;
