const mongoose = require('mongoose');

const User = mongoose.model('User', {

  nickName: {
    type: String,
    // required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isFriend: {
    type: Boolean,
    required: true,
    default: false
  },
  age: {
    type: Number,
    default: null
  }

});

module.exports = {User};
