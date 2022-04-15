const { BlogPost, User, Category } = require('../models');

const getAllPost = async () => {
  const postAll = await BlogPost.findAll({
    include: [{ model: User, 
      as: 'user', 
      attributes: { exclude: ['password'] },
    }, 
    { 
      model: Category, 
      as: 'categories',
      through: { attributes: [] }, 
   }],
  });
  return postAll;
};

module.exports = {
  getAllPost,
};
