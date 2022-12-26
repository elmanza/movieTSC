const AuthMiddleware = require('../../components/authenticationTMDB/middlewares/authMiddleware');

const authenticatedUser = [
  AuthMiddleware.getAuthenticatedUser
];
module.exports = authenticatedUser;
