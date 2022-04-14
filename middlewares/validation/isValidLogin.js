const validJoi = require('../validationJoi');

const isValidLogin = async (req, res, next) => {
  const { error } = validJoi.joiLogin.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = {
  isValidLogin,
};
