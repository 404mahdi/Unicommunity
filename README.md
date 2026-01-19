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
<img width="1918" height="908" alt="Screenshot 2026-01-20 022845" src="https://github.com/user-attachments/assets/a32afa4f-0064-48c2-be37-64ce33f1fe1f" />

### Course Reviews

<img width="1901" height="910" alt="Screenshot 2026-01-20 022823" src="https://github.com/user-attachments/assets/890eb933-fb83-4fce-a9bd-f1d6c29eea90" />

### Instructor Reviews

<img width="1900" height="904" alt="image" src="https://github.com/user-attachments/assets/22c24aea-46d4-4b79-b9ba-beeeb2f2f5d1" />


### Resource Sharing

<img width="1912" height="907" alt="Screenshot 2026-01-20 022732" src="https://github.com/user-attachments/assets/7d852b1c-f478-4d3d-88c9-7f89beca8f9c" />

### Project Partners

<img width="1902" height="910" alt="Screenshot 2026-01-20 022607" src="https://github.com/user-attachments/assets/e87ba508-f99b-4c03-875f-14191100e2fc" />

### Hall of Fame

<img width="1893" height="918" alt="Screenshot 2026-01-20 022422" src="https://github.com/user-attachments/assets/c7d6450a-8786-4070-85cf-bf8d0c6107b7" />

### CGPA Calculator

<img width="1897" height="896" alt="Screenshot 2026-01-20 022650" src="https://github.com/user-attachments/assets/d4613ff2-9041-479c-8f71-ac5f65420cfc" />

### Find Students

<img width="1900" height="900" alt="Screenshot 2026-01-20 022342" src="https://github.com/user-attachments/assets/3ee49fff-3877-4913-a730-5a5232c5b270" />

### User Profile

<img width="1901" height="907" alt="Screenshot 2026-01-20 022304" src="https://github.com/user-attachments/assets/2d06890c-608e-469c-9207-0bd7ba2c5ae9" />


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
