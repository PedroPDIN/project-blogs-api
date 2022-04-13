const express = require('express');
const { isValidUser } = require('./middlewares/isValidUser');
const { isValidLogin } = require('./middlewares/isValidLogin');
const { createUserController } = require('./controllers/user.controller');
const { loginController } = require('./controllers/login.controller');

const app = express();

app.use(express.json());

app.post('/user', isValidUser, createUserController);
app.post('/login', isValidLogin, loginController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
