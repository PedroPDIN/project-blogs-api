const postService = require('../services/blogPost.services');

const postAllController = async (_req, res) => {
  try {
    const postAll = await postService.getAllPost();
    res.status(200).json(postAll);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const postIdController = async (req, res) => {
  try {
    const postId = await postService.getByIdPost(req.params.id);
    if (!postId) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(postId);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  postAllController,
  postIdController,
};
