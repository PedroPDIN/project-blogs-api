const jwt = require('jsonwebtoken');
const loginServices = require('../services/login.services');

const { JWT_SECRET } = process.env;

const loginController = async (req, res) => {
  try {
    const { email } = req.body;
    const data = await loginServices.loginServices(email);
    if (!data) return res.status(400).json({ message: 'Invalid fields' });
  
    const payload = {
      displayName: req.body.displayName,
    };
  
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '10d',
      algorithm: 'HS256',
    });
  
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  loginController,
};
