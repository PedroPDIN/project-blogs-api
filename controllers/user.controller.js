const userServices = require('../services/users.services');

const createUserController = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const data = await userServices.createUser(displayName, email, password, image);
    if (!data) return res.status(409).json({ message: 'User already registered' });
  
    return res.status(201).json({ token: data });
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

const getIdUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const dataService = await userServices.getByIdUser(id);
  
    if (!dataService) return res.status(404).json({ message: 'User does not exist' });
  
    return res.status(200).json(dataService);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
  getIdUserController,
};
