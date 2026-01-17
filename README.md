# Unicommunity

**A Comprehensive Academic Community Platform for BRAC University Students**

_CSE471 System Analysis and Design Project - BRAC University_

---

## 📚 About

Unicommunity is a full-stack web application designed to enhance the academic experience at BRAC University by providing a centralized platform for students to:

- 📝 Share and read **course reviews**
- 💬 Participate in **discussion forums** for courses
- ⭐ Review and rate **instructors**
- 📚 Create and join **course forums** with resource sharing
- 🎯 Track academic progress with **CGPA calculator**
- 📅 Discover and manage **campus events**
- 💌 Connect with peers through **direct messaging**
- 🏆 Recognize top contributors in the **Hall of Fame**
- 🔍 Find **project partners** and study groups
- 🎖️ Earn **badges** for contributions

## 🛠️ Tech Stack

### Frontend

- **React 19.2.3** - UI framework
- **React Router 7.10.1** - Client-side routing
- **Chart.js 4.5.1** - Data visualization for course reviews
- **React Toastify 11.0.5** - Notifications
- **React Icons** - Icon library

### Backend

- **Node.js & Express 5.1.0** - Server framework
- **MongoDB & Mongoose 9.0.0** - Database
- **Passport 0.7.0** - Authentication (Google OAuth)
- **Express Session 1.18.1** - Session management
- **CORS** - Cross-origin resource sharing

### Development Tools

- **Nodemon** - Auto-restart server
- **dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Google OAuth credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Unicommunity
   ```

2. **Backend Setup**

   ```bash
   cd Backend
   npm install

   # Create .env file with the following variables:
   # MONGODB_URI=mongodb://localhost:27017/unicommunity
   # SESSION_SECRET=your_session_secret
   # GOOGLE_CLIENT_ID=your_google_client_id
   # GOOGLE_CLIENT_SECRET=your_google_client_secret
   # GOOGLE_CALLBACK_URL=http://localhost:1760/api/auth/google/callback
   # FRONTEND_URL=http://localhost:3000
   # PORT=1760

   npm start
   ```

3. **Frontend Setup**

   ```bash
   cd Frontend
   npm install

   # Create .env file with:
   # REACT_APP_API_URL=http://localhost:1760
   # REACT_APP_BACKEND_URL=http://localhost:1760

   npm start
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:1760

## 📁 Project Structure

```
Unicommunity/
├── Backend/
│   ├── Config/              # Authentication configuration
│   ├── Controllers/         # Request handlers
│   ├── Models/              # MongoDB schemas
│   ├── Routes/              # API routes
│   ├── Middleware/          # Authentication & authorization
│   └── server.js            # Entry point
├── Frontend/
│   ├── public/              # Static assets
│   └── src/
│       ├── Components/      # Reusable UI components
│       ├── Pages/           # Page components
│       ├── CSS/             # Stylesheets
│       ├── Assets/          # Images, icons
│       ├── config.js        # API configuration
│       └── index.js         # Entry point
└── README.md
```

## ✨ Key Features

### 🔐 Authentication

- Google OAuth integration (BRACU email required)
- Session-based authentication
- Protected routes with middleware

### 📊 Course Reviews

- Rate courses on multiple metrics (Theory, Lab, Assignment, Project, Resources)
- Radar chart visualization of course difficulty
- Written reviews and comments
- Aggregated ratings per course

### 💬 Discussion Forums

- Create and participate in course discussions
- Comment on threads
- Like/dislike system
- User profiles with avatars

### 👨‍🏫 Instructor Reviews

- Rate instructors on clarity, fairness, and helpfulness
- Search instructors by name or initial
- Written feedback

### 📚 Course Forums

- Create forums for specific courses
- Upload and share resources (files or URLs)
- Download tracking
- Member management

### 🏆 Hall of Fame

- Leaderboard showcasing top contributors
- Points awarded for:
  - Discussion threads (1x)
  - Comments (1.5x)
  - Course reviews (2x)
  - Instructor reviews (2.5x)
  - Forum creation (3x)
- Badge system for achievements

### 💬 Direct Messaging

- Real-time messaging between students
- Message history
- User search and profiles

### 📅 Events

- Create and manage campus events
- RSVP system (Going/Interested)
- Event filtering and search

### 📊 CGPA Calculator

- Track current and completed courses
- Automatic GPA calculation
- Persistent storage

## 🔒 Security Features

- Environment-based configuration
- Authentication middleware
- Ownership validation for modifications
- Session security with httpOnly cookies
- CORS configuration
- Input sanitization

## 📦 Deployment

The application is configured for deployment on Vercel:

1. Set environment variables in Vercel dashboard
2. Deploy backend and frontend separately
3. Update CORS and callback URLs
4. Configure MongoDB Atlas connection

See `DEPLOYMENT.md` for detailed instructions.

## 👥 Contributors

This project was developed as part of CSE471 (System Analysis and Design) course at BRAC University.

## 📄 License

This is an academic project developed for educational purposes at BRAC University.
