const { verifyJWT } = require('../../services/generateToken');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const payload = verifyJWT(authorization); 
    req.user = payload;
    next();
    } catch (error) {
      console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
    } 
};

module.exports = auth;