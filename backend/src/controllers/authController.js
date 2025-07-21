const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { email, password, mobileNo, firstName, lastName, address, pincode } = req.body;
  try {
    const user = await User.create({ email, password, mobileNo, firstName, lastName, address, pincode });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { email: user.email, firstName: user.firstName, lastName: user.lastName, mobileNo: user.mobileNo, address: user.address, pincode: user.pincode } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  register, login
};