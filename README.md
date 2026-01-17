# Unicommunity

**An Academic Collaboration Platform for BRAC University**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-2776ea?style=flat-square)](https://unicommunity-liart.vercel.app/)

Unicommunity is a comprehensive web-based platform designed to enhance the academic experience at BRAC University. The system facilitates knowledge sharing, course evaluation, peer communication, and academic resource management within the university community.

**Live Application:** [https://unicommunity-liart.vercel.app/](https://unicommunity-liart.vercel.app/)

---

## Overview

This platform serves as a centralized hub for students to access course information, share academic insights, and collaborate with peers. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the system provides authenticated access exclusively to BRAC University students through institutional email verification.

### Core Functionalities

**1. Course Review System**

- Multi-dimensional course evaluation across five criteria: Theory, Lab, Assignments, Projects, and Resources
- Each criterion rated on a 1-5 scale for granular feedback
- Interactive radar chart visualization using Chart.js for at-a-glance comparison
- Aggregated statistical metrics from all student reviews
- Historical review data to track course evolution
- Search and filter courses by department, code, or name
- Individual review browsing with timestamps and user attribution

**2. Instructor Evaluation Module**

- Comprehensive instructor assessments across multiple dimensions: clarity, fairness, and helpfulness
- Searchable instructor database with profile pages
- Search by full name or initials for quick lookup
- Anonymous review submission to encourage honest feedback
- Aggregated ratings and detailed written reviews
- Historical evaluation tracking across semesters
- Contribution tracking for leaderboard integration

**3. Discussion Forum System**

- Course-specific threaded discussion boards
- Create new discussion threads with title, description, and course association
- Nested comment system supporting multi-level conversations
- Like/dislike voting mechanism for community-driven content ranking
- User avatar integration via Google profile photos
- Edit and delete permissions for content owners
- Real-time updates for new comments and interactions
- Search functionality to find relevant discussions
- Thread sorting by popularity, recency, or course

**4. Resource Sharing Hub (Course Forums)**

- Dedicated forum creation for each course
- File upload capabilities for study materials, past papers, and project files
- Link sharing for external resources
- Download tracking and resource popularity metrics
- User-curated content organization
- Forum ownership and moderation by creators
- Resource categorization and tagging
- Contribution counting for gamification system

**5. Project Partner Finder**

- Create project listing posts with detailed requirements
- Specify course, required skills, and team size
- Member capacity management and application tracking
- Search and filter available project opportunities
- Application system for interested students
- Accept/reject applicant functionality
- Automated Trello board creation upon team formation
- Direct Trello API integration for workspace setup
- Team member synchronization with Trello
- Project collaboration space management

**6. Hall of Fame Leaderboard**

- Real-time contribution tracking across platform activities
- Weighted scoring system:
  - Discussion threads: 1x multiplier
  - Discussion comments: 1.5x multiplier
  - Course reviews: 2x multiplier
  - Instructor reviews: 2.5x multiplier
  - Forum creation: 3x multiplier
- Top 3 contributors featured with podium-style visualization
- Achievement badge system recognizing milestones
- User contribution history and statistics
- Motivates quality participation and knowledge sharing

**7. CGPA Calculator**

- Add current semester courses with credit hours
- Track completed courses with grades
- Automatic GPA calculation using BRACU grading system
- Visual progress tracking and statistics
- Persistent data storage per user account
- Course-by-course grade breakdown
- Semester-wise GPA history
- Edit and update course information

**8. Campus Event Management**

- Browse upcoming campus events and activities
- Create and publish new event listings
- Event details: title, description, date, time, location, and category
- RSVP system with "Going" and "Interested" status options
- Event participant count and attendee lists
- Event filtering by category, date, or popularity
- Event creator management capabilities
- Calendar integration-ready structure

**9. Direct Messaging System**

- Peer-to-peer private messaging functionality
- Real-time message delivery and notifications
- Message history persistence
- User search to find and message classmates
- Conversation threading and organization
- Message timestamps and read status
- Full conversation overview page showing all active chats
- Search messages within conversations

**10. User Profile Management**

- Public and private profile views
- Google OAuth authentication with profile photo integration
- User statistics: total contributions, badges earned, leaderboard rank
- Activity timeline showing recent contributions
- Profile customization with bio and academic information
- Privacy controls for profile visibility
- View other students' public profiles
- Connection and network building

**11. User Discovery and Search**

- Comprehensive student search functionality
- Browse all registered BRACU students on the platform
- Search by name, email, or student ID
- Filter users by department or activity level
- Direct access to user profiles and messaging
- Network building and peer discovery
- View user contributions and achievements

**12. Authentication and Security**

- Google OAuth 2.0 with BRACU domain restriction (@g.bracu.ac.bd)
- Session-based authentication with secure httpOnly cookies
- Automatic session persistence with MongoDB
- Role-based access control and ownership validation
- CSRF protection and secure API endpoints
- Environment-based security configuration
- Direct peer-to-peer messaging for academic collaboration

---

## Technical Architecture

### Technology Stack

**Frontend**

- React 19.2.3 with React Router for single-page application functionality
- Chart.js 4.5.1 for data visualization
- Custom CSS with design system using CSS variables
- React Toastify for user notifications

**Backend**

- Node.js with Express 5.1.0 framework
- RESTful API architecture with modular routing
- Passport.js for OAuth 2.0 authentication
- Session management with connect-mongo for persistence

**Database**

- MongoDB with Mongoose ODM for data modeling
- MongoDB Atlas for cloud hosting
- Session storage in MongoDB for scalability

**Security Implementation**

- Google OAuth 2.0 with domain restriction (@g.bracu.ac.bd)
- Session-based authentication with httpOnly cookies
- CORS configuration with origin whitelisting
- Ownership-based authorization middleware
- Environment variable management for sensitive credentials

### System Architecture

```
Client (React SPA)
        ↓
Vercel Frontend Hosting
        ↓
    REST API
        ↓
Render Backend Hosting
        ↓
MongoDB Atlas Database
```

### API Endpoints

| Endpoint                  | Method   | Description                          |
| ------------------------- | -------- | ------------------------------------ |
| `/api/auth/google`        | GET      | Initiates OAuth authentication flow  |
| `/api/auth/current`       | GET      | Retrieves authenticated user session |
| `/api/courses`            | GET      | Lists available courses              |
| `/api/reviews`            | POST     | Submits course review                |
| `/api/discussions`        | GET/POST | Manages discussion threads           |
| `/api/instructor-reviews` | GET/POST | Handles instructor evaluations       |
| `/api/events`             | GET/POST | Manages campus events                |
| `/api/messages`           | GET/POST | Direct messaging functionality       |
| `/api/hof/getTop`         | GET      | Retrieves leaderboard rankings       |

All endpoints require authenticated sessions except OAuth initialization.

---

## Project Structure

```
Unicommunity/
├── Backend/
│   ├── Config/           # Authentication and configuration
│   ├── Controllers/      # Business logic handlers
│   ├── Models/          # Database schemas
│   ├── Routes/          # API route definitions
│   ├── Middleware/      # Authentication and authorization
│   └── server.js        # Application entry point
└── Frontend/
    ├── src/
    │   ├── Components/  # Reusable UI components
    │   ├── Pages/       # Route-level components
    │   ├── CSS/         # Stylesheets
    │   └── config.js    # API endpoint configuration
    └── public/          # Static assets
```

---

## Contributing

This project was developed as part of the CSE471 (System Analysis and Design) course at BRAC University. Contributions are welcome through pull requests.

**Contribution Guidelines:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/description`)
3. Commit changes with clear messages
4. Push to the branch (`git push origin feature/description`)
5. Open a Pull Request with detailed description

---

## Project Information

**Course:** CSE471 - System Analysis and Design  
**Institution:** BRAC University  
**Academic Year:** 2025
