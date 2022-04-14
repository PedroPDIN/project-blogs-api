const jwt = require('jsonwebtoken');

const JWT_SECRET = '*ninguemviu$#';

const generateToken = (data) => {
  const payload = {
    user: data,
  };

  const configJWT = {
    expiresIn: '10d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, JWT_SECRET, configJWT);

  return token;
};

const verifyJWT = (auth) => {
  const decoded = jwt.verify(auth, JWT_SECRET);
  return decoded;
};

module.exports = {
  generateToken,
  verifyJWT,
};
