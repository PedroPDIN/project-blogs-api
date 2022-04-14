const { loginController } = require('./login.controller');
const { 
  createUserController,
  getAllUsersController,
  getIdUserController,
 } = require('./user.controller');

 module.exports = {
  login: { loginController },
  user: {
    createUserController,
    getAllUsersController,
    getIdUserController,
  },
 };
