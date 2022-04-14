const jwt = require('jsonwebtoken');
const userServices = require('../services/users.services');

const { JWT_SECRET } = process.env;

const createUserController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const data = await userServices.createUser(displayName, email, password, image);
  if (!data) return res.status(409).json({ message: 'User already registered' });
  
  const payload = {
    displayName: req.body.displayName,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllUsersController = async (_req, res) => {
  try {
    const usersAll = await userServices.getAllUsers();
    return res.status(200).json(usersAll);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
};
