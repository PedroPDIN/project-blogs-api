const { loginController } = require('./login.controller');
const { createCategoryController } = require('./category.controller');
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
  category: {
    createCategoryController,
  },
 };
