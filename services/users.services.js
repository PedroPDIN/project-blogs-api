const { User } = require('../models');
const { generateToken } = require('./generateToken');

const createUser = async (displayName, email, password, image) => {
  const existEmail = await User.findOne({ where: { email } })
    .then((data) => data);

  if (existEmail) {
    return null;
  }
  
  const result = await User.create({ displayName, email, password, image });
  return generateToken(result);
};

const getAllUsers = async () => {
  const getAll = await User.findAll({ attributes: { exclude: ['password'] } })
    .then((data) => data);
  return getAll;
};

const getByIdUser = async (id) => {
  const findUser = await User.findOne({
     where: { id },
     attributes: { exclude: ['password'] },
    });

  if (!findUser) return null;

  const dataUser = await findUser.dataValues;
  return dataUser;
};

module.exports = {
  createUser,
  getAllUsers,
  getByIdUser,
};
