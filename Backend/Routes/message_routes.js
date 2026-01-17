const express = require("express");
const router = express.Router();
const { requireAuth } = require("../Middleware/auth");
const {
  sendMessage,
  getConversation,
  getUserConversations,
  deleteMessage,
  deleteConversation,
} = require("../Controllers/message_controllers");

// All message routes require authentication
router.use(requireAuth);

// Send a message
router.post("/send/:recipientId", sendMessage);

// Get conversation between two users
router.get("/conversation/:userId1/:userId2", getConversation);

// Get all conversations for a user
router.get("/conversations/:userId", getUserConversations);

// Delete a specific message
router.delete("/:messageId", deleteMessage);

// Delete entire conversation between two users
router.delete("/conversation/:userId1/:userId2", deleteConversation);

module.exports = router;
