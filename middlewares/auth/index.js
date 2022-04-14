const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = decoded.email;
    next();
  });
};

module.exports = auth;
