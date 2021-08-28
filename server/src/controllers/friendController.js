const express = require('express');
const router = express.Router();
require('bcrypt');
// const {User} = require('../models/userModel');

const {
  getFriends,
  getUsers,
  removeFromFriendsById,
  addUserToFriendsById
} = require('../services/friendService');

const {
  asyncAwaitWrapper,
} = require('../utils/asyncAwaitWrapper');


//get users friends

router.get('/', asyncAwaitWrapper( async (req, res) => {
  // const {userId} = req.user;
  const friends = await getFriends()
  res.json({"friends": friends})
}))

//remove users frend by Id

router.patch('/:id', asyncAwaitWrapper( async (req, res) => {

  const userId = req.params.id;
  await removeFromFriendsById(userId);
  res.json({'message': 'user removed from friends successfully'});

}));

//get list of users(not friends)

router.get('/search', asyncAwaitWrapper( async (req, res) => {
  const users = await getUsers()
  res.json({"users": users})
}))

//add user to friends by Id

router.patch('/search/:id', asyncAwaitWrapper( async (req, res) => {

  const userId = req.params.id;
  await addUserToFriendsById(userId);
  res.json({'message': 'user added to friends successfully'});

}));


module.exports = {
  friendsRout: router,
};
