const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const existEmail = await User.findByPk(email);
  if (!existEmail) return null;

  const result = await User.create({ displayName, email, password, image });
  return result;
};

module.exports = {
  createUser,
};
