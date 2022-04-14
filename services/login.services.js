const { User } = require('../models');
const { generateToken } = require('./generateToken');

const loginServices = async (email) => {
  const dataUser = await User.findOne({ where: { email } })
  .then((data) => data);
   if (dataUser) return generateToken(email);
   return false;
};

module.exports = {
  loginServices,
};
