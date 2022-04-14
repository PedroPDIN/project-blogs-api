const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategory = async () => {
  const categoriesAll = await Category.findAll();
  return categoriesAll;
};

module.exports = {
  createCategory,
  getAllCategory,
};
