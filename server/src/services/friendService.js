const {User} = require('../models/userModel');
// const bcrypt = require('bcrypt');
const {BadRequestError} = require('../utils/errorsUtil');


const getFriends = async () => {
  return await User.find({"isFriend" :true})
}

const removeFromFriendsById = async (userId) => {
  const user = await User.findByIdAndUpdate(
    userId, {isFriend: false})
  console.log(user)
  if (!user) {
    throw new BadRequestError('Can not find with this id');
  }
}

const getUsers = async () => {
  return await User.find({"isFriend" :false})
}

const addUserToFriendsById = async (userId) => {
  const user = await User.findByIdAndUpdate(
    userId, {isFriend: true})
  console.log(user)
  if (!user) {
    throw new BadRequestError('Can not find with this id');
  }
}


module.exports = {
  getFriends,
  removeFromFriendsById,
  getUsers,
  addUserToFriendsById
};
