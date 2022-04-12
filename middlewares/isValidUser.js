const validJoi = require('./validateJoi');

const isValidUser = async (req, res, next) => {
  const { error } = validJoi.joiUser.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = {
  isValidUser,
};
