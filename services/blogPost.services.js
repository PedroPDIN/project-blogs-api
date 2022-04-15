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

const getByIdPost = async (id) => {
  const postId = await BlogPost.findOne({
    include: [{ model: User, 
      as: 'user', 
      attributes: { exclude: ['password'] },
    }, 
    { 
      model: Category, 
      as: 'categories',
      through: { attributes: [] }, 
   }],
   where: { id },
  });

  if (!postId) return null;

  return postId;
};

module.exports = {
  getAllPost,
  getByIdPost,
};
