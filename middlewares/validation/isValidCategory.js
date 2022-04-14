const validJoi = require('../validationJoi');

const isValidCategory = async (req, res, next) => {
  const { error } = validJoi.joiCategory.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = {
  isValidCategory,
};
