const loginServices = require('../services/login.services');

const loginController = async (req, res) => {
  try {
    const { email } = req.body;
    const data = await loginServices.loginServices(email);
    if (!data) return res.status(400).json({ message: 'Invalid fields' });
  
    return res.status(200).json({ token: data });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  loginController,
};
