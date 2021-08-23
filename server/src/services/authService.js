const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {User} = require('../models/userModel');
const {BadRequestError} = require('../utils/errorsUtil');



const registration = async ({email, password}) => {
  const user = new User({
    email,
    password: await bcrypt.hash(password, 5)
  });
  await user.save();
};


const logIn = async ({email, password}) => {
  const user = await User.findOne({email});

  if (!user) {
    throw new BadRequestError('Invalid email or password');
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new BadRequestError('Invalid email or password');
  }

  const token = jwt.sign({
    _id: user._id,
    email: user.email,
  }, 'uberhw');
  return token;
};


module.exports = {
  logIn,
  registration
};
