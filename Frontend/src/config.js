// API Configuration
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:1760";
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:1760";

export const config = {
  apiUrl: API_URL,
  backendUrl: BACKEND_URL,
  endpoints: {
    auth: {
      google: `${BACKEND_URL}/api/auth/google`,
      current: `${API_URL}/api/auth/current`,
      logout: `${BACKEND_URL}/api/auth/logout`,
    },
    users: `${API_URL}/api/users`,
    forums: `${API_URL}/api/forums`,
    discussions: `${API_URL}/api/discussions`,
    courses: `${API_URL}/api/courses`,
    reviews: `${API_URL}/api/reviews`,
    events: `${API_URL}/api/events`,
    messages: `${API_URL}/api/messages`,
    cgpa: `${API_URL}/api/cgpa`,
    hof: `${API_URL}/api/hof/getTop`,
    instructorReviews: `${API_URL}/api/instructor-reviews`,
    partners: `${API_URL}/api/partners`,
  },
};

export default config;
