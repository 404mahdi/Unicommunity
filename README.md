# Unicommunity

> Where BRAC University students connect, collaborate, and conquer academics together. A next-generation academic social platform that transforms how students share knowledge, review courses, and build community.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-vercel-app.vercel.app)
[![Built With](https://img.shields.io/badge/built%20with-MERN-blue)](https://www.mongodb.com/mern-stack)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🎯 What Makes Unicommunity Special?

Imagine having **every academic resource you need** in one place—course reviews with visual difficulty charts, instructor ratings, peer discussions, event discovery, and even a gamified leaderboard that rewards your contributions. Unicommunity isn't just another student portal; it's your **academic command center**.

### 🌟 Stand-Out Features

#### 📊 **Intelligent Course Reviews**

Not just star ratings—students rate courses across **5 dimensions** (Theory, Lab, Assignments, Projects, Resources) visualized with interactive **radar charts**. See at a glance which courses match your learning style before registration.

#### 👨‍🏫 **Instructor Insights**

Make informed decisions with comprehensive instructor reviews covering **clarity**, **fairness**, and **helpfulness**. Search by name or initial, read detailed feedback from peers, and plan your schedule strategically.

#### 💬 **Dynamic Discussion Forums**

Create threads for any course, engage in threaded conversations, and build knowledge collaboratively. With **like/dislike** mechanics and nested comments, the best answers naturally rise to the top.

#### 🎓 **Course Resource Hubs**

Each course gets its own forum where students can **upload and share** study materials, past papers, project files, or helpful links. Track downloads and discover the most valuable resources instantly.

#### 🏆 **Hall of Fame Leaderboard**

Contributions matter. Earn points for discussions (1x), comments (1.5x), course reviews (2x), instructor reviews (2.5x), and creating forums (3x). Top 3 contributors get featured with **podium-style rankings** and achievement badges.

#### 🎯 **Smart CGPA Calculator**

Track current and completed courses, automatically calculate your GPA, and visualize your academic progress. All data persists across sessions—no more spreadsheet juggling.

#### 📅 **Campus Event Discovery**

Never miss important events. Browse, create, and RSVP (Going/Interested) to campus activities. Smart filtering helps you find what matters to you.

#### 💌 **Direct Messaging**

Connect with classmates, form study groups, or find project partners through integrated **peer-to-peer messaging**. Search students by name and start conversations instantly.

#### 🎖️ **Achievement System**

Unlock badges as you contribute—from "Hello World" for your first post to recognition for becoming a top contributor. Visible achievements motivate quality participation.

---

## 🚀 How It Works

### Seamless Authentication

Sign in with your **BRACU Google account**—no passwords to remember. OAuth 2.0 ensures security while restricting access to verified university students only.

### Personalized Experience

Once logged in, you see personalized content based on your contributions, courses you're tracking, and classmates you're connected with. Your profile grows with your activity.

### Contribution-Driven Content

Every review, discussion, and resource shared makes the platform smarter. The more students participate, the more valuable it becomes for everyone—true **network effects**.

### Real-Time Interactions

Comment on discussions, message peers, RSVP to events—everything updates instantly. No page refreshes, no delays, just smooth user experience.

---

## 🏗️ Technical Architecture

**Built on Modern Stack**

- **React 19** for lightning-fast UI with component reusability
- **Express 5** backend with RESTful API design
- **MongoDB** for flexible, scalable data storage
- **Chart.js** for beautiful data visualizations
- **Passport.js** for rock-solid OAuth security

**Smart System Design**

```
User → React SPA (Vercel) → Express API (Render) → MongoDB Atlas
         ↑                      ↑
    Visual Layer          Business Logic
```

**Security-First Approach**

- Session-based authentication with httpOnly cookies
- Ownership validation—users can only edit their own content
- CORS protection preventing unauthorized access
- Environment-based configuration keeping secrets safe

---

## 🎨 Design Philosophy

**Consistency is Key**: Every component follows a unified design system with CSS variables, ensuring visual harmony across all pages.

**User-Centric**: Features designed based on actual student needs—from course planning to peer collaboration.

**Performance**: Optimized for speed with efficient data fetching, lazy loading, and minimized re-renders.

**Accessibility**: Clean typography, intuitive navigation, and responsive layouts that work on any device.

---

## 🛠️ Quick Start for Developers

### Prerequisites

- Node.js 16+
- MongoDB (local or Atlas)
- Google OAuth credentials (requires BRACU domain)

### Setup

```bash
# Clone and install
git clone <repository-url>
cd Unicommunity

# Backend
cd Backend
npm install
# Create .env file (see .env.example)
npm start

# Frontend
cd Frontend
npm install
# Create .env file (see .env.example)
npm start
```

**Environment Variables**: See `.env.example` files in Backend and Frontend directories for required configuration. Never commit actual credentials to version control.

---

## 📡 API Architecture

**RESTful Design** with clear endpoint structure:

- `/api/auth/*` - Authentication flows
- `/api/courses/*` - Course operations
- `/api/reviews/*` - Review submissions
- `/api/discussions/*` - Forum interactions
- `/api/instructor-reviews/*` - Instructor ratings
- `/api/events/*` - Event management
- `/api/messages/*` - Direct messaging
- `/api/hof/*` - Leaderboard data

All endpoints require authentication except OAuth initiation. Clean separation of concerns with controllers, routes, and middleware layers.

---

## 🗺️ Future Vision

**Next-Gen Features in Development:**

- Real-time notifications for replies and messages
- Advanced search with course code, instructor, and semester filters
- Mobile app for iOS and Android
- Email digests for trending discussions
- Admin moderation dashboard
- Analytics insights for students (study patterns, contribution trends)
- Integration with university course registration system

---

## 🤝 Contributing

While this began as a CSE471 academic project, we welcome contributions from the BRACU community:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request with clear description

**Ideas for contributions:**

- UI/UX improvements
- New badge achievements
- Performance optimizations
- Bug fixes
- Documentation enhancements

---

## 📜 License

MIT License - feel free to fork and adapt for your institution.

---

## Acknowledgments

**Course**: CSE471 - System Analysis and Design  
**Institution**: BRAC University  
**Academic Year**: 2025-2026
