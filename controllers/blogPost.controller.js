const postService = require('../services/blogPost.services');

const postAllController = async (_req, res) => {
  try {
    const postAll = await postService.getAllPost();
    res.status(200).json(postAll);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  postAllController,
};
