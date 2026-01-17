require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("./Config/passport_config");

const app = express();

const PORT = process.env.PORT || 1760;
const MONGO_URI = process.env.SERVER_URI;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const CORS_ORIGINS = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",")
  : ["http://localhost:3000"];

app.use(
  cors({
    origin: CORS_ORIGINS,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// --- SESSION & PASSPORT---
if (!process.env.SESSION_SECRET) {
  console.warn(
    "WARNING: SESSION_SECRET not set. Using default for development only.",
  );
}

app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev_secret_change_in_production",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// --- ROUTES ---
const eventRoutes = require("./Routes/event_routes");
const cgpaRoutes = require("./Routes/cgpa_routes");
const reviewRoutes = require("./Routes/review_routes");
const authRoutes = require("./Routes/auth_routes");
const userRoutes = require("./Routes/user_routes");
const forumRoutes = require("./Routes/forum_routes");
const discussionRoutes = require("./Routes/discussion_routes");
const courseRoutes = require("./Routes/course_routes");
const messageRoutes = require("./Routes/message_routes");
const messagesOverviewRoutes = require("./Routes/messages_overview_routes");
const contributionRoutes = require("./Routes/hof_routes");
const instructorReviewRoutes = require("./Routes/instructor_review_routes");
const projectListingRoutes = require("./Routes/project_listing_routes");

app.use("/api/events", eventRoutes);
app.use("/api/cgpa", cgpaRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/forums", forumRoutes);
app.use("/api/discussions", discussionRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/messages", messagesOverviewRoutes);
app.use("/api/hof", contributionRoutes);
app.use("/api/instructor-reviews", instructorReviewRoutes);
app.use("/api/partners", projectListingRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// --- DB CONNECTION & START ---
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log("Error connecting to DB:\n\n", error);
  });
