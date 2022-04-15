const { loginController } = require('./login.controller');
const { 
  createCategoryController,
  getAllCategoryController,
} = require('./category.controller');
const { 
  createUserController,
  getAllUsersController,
  getIdUserController,
 } = require('./user.controller');

 const { 
   postAllController,
   postIdController,
  } = require('./blogPost.controller');

 module.exports = {
  login: { loginController },
  user: {
    createUserController,
    getAllUsersController,
    getIdUserController,
  },
  category: {
    createCategoryController,
    getAllCategoryController,
  },
  post: {
    postAllController,
    postIdController,
  },
 };
