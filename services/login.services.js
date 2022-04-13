const { User } = require('../models');

const loginServices = async (email) => {
  const dataUser = await User.findOne({ where: { email } })
  .then((data) => data);
   if (dataUser) return true;
   return false;
};

module.exports = {
  loginServices,
};
