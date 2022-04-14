const express = require('express');
const auth = require('./middlewares/auth');
const validate = require('./middlewares/validation');
const { user, login } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/user', auth, user.getAllUsersController);
app.get('/user/:id', auth, user.getIdUserController);

app.post('/user', validate.isValidUser, user.createUserController);
app.post('/login', validate.isValidLogin, login.loginController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
