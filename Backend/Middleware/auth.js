// Authentication and Authorization Middleware

/**
 * Middleware to check if user is authenticated
 * Use this for routes that require any logged-in user
 */
const requireAuth = (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ error: "Unauthorized - Please log in" });
  }
  next();
};

/**
 * Middleware to check if authenticated user owns the resource
 * Use this for routes that modify user-specific data
 * @param {string} paramName - The parameter name containing the userId (default: 'userId')
 */
const requireOwnership = (paramName = "userId") => {
  return (req, res, next) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      return res.status(401).json({ error: "Unauthorized - Please log in" });
    }

    const resourceUserId = req.params[paramName];
    const authenticatedUserId = req.user._id.toString();

    if (resourceUserId !== authenticatedUserId) {
      return res.status(403).json({
        error: "Forbidden - You don't have permission to access this resource",
      });
    }

    next();
  };
};

/**
 * Middleware to check if authenticated user owns a resource by checking request body
 * Use this for operations where the owner ID is in the body (like creating posts)
 * @param {string} bodyField - The field name in request body containing the userId
 */
const requireOwnershipFromBody = (bodyField = "userId") => {
  return (req, res, next) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      return res.status(401).json({ error: "Unauthorized - Please log in" });
    }

    const resourceUserId = req.body[bodyField];
    const authenticatedUserId = req.user._id.toString();

    if (resourceUserId && resourceUserId !== authenticatedUserId) {
      return res.status(403).json({
        error:
          "Forbidden - You cannot perform actions on behalf of other users",
      });
    }

    // If no userId in body, attach authenticated user's ID
    if (!resourceUserId) {
      req.body[bodyField] = authenticatedUserId;
    }

    next();
  };
};

/**
 * Middleware to attach authenticated user ID to request body
 * Use this when you want to automatically set the user from session
 */
const attachUserId = (req, res, next) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    req.body.authenticatedUserId = req.user._id.toString();
  }
  next();
};

module.exports = {
  requireAuth,
  requireOwnership,
  requireOwnershipFromBody,
  attachUserId,
};
