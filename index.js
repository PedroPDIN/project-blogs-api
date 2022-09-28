const express = require('express');
const auth = require('./middlewares/auth');
const validate = require('./middlewares/validation');
const { user, login, category, post } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/user', auth, user.getAllUsersController);
app.get('/categories',
auth,
category.getAllCategoryController);
app.get('/user/:id', auth, user.getIdUserController);
app.get('/post', auth, post.postAllController);
app.get('/post/:id', auth, post.postIdController);

app.post('/user', validate.isValidUser, user.createUserController);
app.post('/login', validate.isValidLogin, login.loginController);
app.post('/categories',
auth,
validate.isValidCategory, 
category.createCategoryController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
