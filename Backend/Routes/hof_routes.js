const express = require("express"); //to get express overall
const router = express.Router(); //to get express router
const { requireAuth } = require("../Middleware/auth");
const {
  incDiscussionComment,
  incDiscussionThread,
  incReview,
  incInstructorReview,
  incForum,
  getTopThree,
} = require("../Controllers/contribution_controllers"); //import from controllers

// All routes require authentication
router.use(requireAuth);

//UPDATE thread contribution
router.put("/thread/:userId", incDiscussionThread);

//UPDATE thread comment contribution
router.put("/thread_comment/:userId", incDiscussionComment);

//UPDATE Review contribution
router.put("/review/:userId", incReview);

//UPDATE Instructor Review contribution
router.put("/instructor_review/:userId", incInstructorReview);

//UPDATE Forum contribution
router.put("/forum/:userId", incForum);

//GET top five contributors:
router.get("/getTop", getTopThree);

module.exports = router;
