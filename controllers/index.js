const { loginController } = require('./login.controller');
const { 
  createUserController,
  getAllUsersController,
 } = require('./user.controller');

 module.exports = {
  login: { loginController },
  user: {
    createUserController,
    getAllUsersController,
  },
 };
