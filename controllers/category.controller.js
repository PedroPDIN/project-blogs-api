const categoryService = require('../services/categories.services');

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.createCategory(name);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createCategoryController,
};
