# Unicommunity

<div align="center">

**Academic Collaboration Platform for BRAC University**

[![Live Demo](https://img.shields.io/badge/Demo-Live-success?style=for-the-badge)](https://unicommunity-liart.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express_5-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/atlas)

[Live Demo](https://unicommunity-liart.vercel.app/) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## About

Unicommunity is a MERN-stack platform that centralizes academic collaboration for BRAC University students. It enables course and instructor reviews, peer discussions, resource sharing, and project team formation—all secured via institutional Google OAuth (@g.bracu.ac.bd).

## Features

| Module                 | Description                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| **Course Reviews**     | Multi-criteria ratings (Theory, Lab, Assignments, Projects, Resources) with radar chart visualization |
| **Instructor Reviews** | Anonymous evaluations covering clarity, fairness, and helpfulness                                     |
| **Discussion Forums**  | Course-specific threads with nested comments and community voting                                     |
| **Resource Sharing**   | Upload/download study materials and past papers by course                                             |
| **Project Partners**   | Team formation with Trello board auto-generation                                                      |
| **Hall of Fame**       | Gamified leaderboard with weighted contribution scoring                                               |
| **CGPA Calculator**    | Semester-wise grade tracking with BRACU grading system                                                |
| **Campus Events**      | Event listings with RSVP tracking                                                                     |
| **Messaging**          | Private peer-to-peer communication                                                                    |
| **Profiles**           | User stats, badges, and activity history                                                              |

## Screenshots

### Course Reviews

![Course Reviews](screenshots/course-reviews.png)

### Instructor Reviews

![Instructor Reviews](screenshots/instructor-reviews.png)

### Discussion Forums

![Discussion Forums](screenshots/discussion-forums.png)

### Resource Sharing

![Resource Sharing](screenshots/resource-sharing.png)

### Project Partners

![Project Partners](screenshots/project-partners.png)

### Hall of Fame

![Hall of Fame](screenshots/hall-of-fame.png)

### CGPA Calculator

![CGPA Calculator](screenshots/cgpa-calculator.png)

### Campus Events

![Campus Events](screenshots/campus-events.png)

### Messaging

![Messaging](screenshots/messaging.png)

### User Profile

![User Profile](screenshots/user-profile.png)

## Tech Stack

| Layer        | Technologies                     |
| ------------ | -------------------------------- |
| Frontend     | React 19, React Router, Chart.js |
| Backend      | Node.js, Express 5, Passport.js  |
| Database     | MongoDB Atlas, Mongoose ODM      |
| Deployment   | Vercel (client), Render (server) |
| Integrations | Google OAuth 2.0, Trello API     |

## API Reference

| Endpoint                  | Method   | Description            |
| ------------------------- | -------- | ---------------------- |
| `/api/auth/google`        | GET      | OAuth authentication   |
| `/api/auth/current`       | GET      | Session validation     |
| `/api/courses`            | GET      | Course listings        |
| `/api/reviews`            | POST     | Submit course review   |
| `/api/discussions`        | GET/POST | Discussion threads     |
| `/api/instructor-reviews` | GET/POST | Instructor evaluations |
| `/api/events`             | GET/POST | Campus events          |
| `/api/messages`           | GET/POST | Direct messages        |
| `/api/hof/getTop`         | GET      | Leaderboard data       |

> All endpoints require authentication except `/api/auth/google`.

## Project Structure

```
├── Backend/
│   ├── Config/         # OAuth configuration
│   ├── Controllers/    # Business logic
│   ├── Models/         # Mongoose schemas
│   ├── Routes/         # API endpoints
│   ├── Middleware/     # Auth middleware
│   └── server.js
└── Frontend/
    └── src/
        ├── Components/ # UI components
        ├── Pages/      # Route views
        └── CSS/        # Stylesheets
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

Developed for **CSE471 — System Analysis and Design** at BRAC University.

---
