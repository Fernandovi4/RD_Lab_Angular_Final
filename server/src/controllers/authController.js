const express = require('express');
const {User} = require('../models/userModel');
const router = express.Router();

const {
  logIn,
  registration
} = require('../services/authService');

const {
  asyncAwaitWrapper,
} = require('../utils/asyncAwaitWrapper');


router.post('/register', asyncAwaitWrapper(async (req, res) => {
  const {email, password} = req.body;
  console.log('from authController')
  await registration({email, password});

  res.json({'message': 'Profile created successfully'});
}));


router.post('/login', asyncAwaitWrapper(async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const token = await logIn({email, password});
  const user = await User.findOne({'email': email});

  res.cookie('jwt_token', token);
  // res.cookie('role', user.role);
  res.json({'jwt_token': token});
}));


module.exports = {
  authRout: router,
};
