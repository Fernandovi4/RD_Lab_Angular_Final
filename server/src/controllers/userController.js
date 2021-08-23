const express = require('express');
const router = express.Router();
require('bcrypt');
const {User} = require('../models/userModel');

const {
  // getUsersProfileInfo,
  getFriends
} = require('../services/userService');

const {
  asyncAwaitWrapper,
} = require('../utils/asyncAwaitWrapper');

// router.get('/', asyncAwaitWrapper(async (req, res) => {
//   const {userId} = req.user;
//   const user = await getUsersProfileInfo(userId);
//   res.json({
//     'user': {
//       '_id': userId,
//       'nickName': user.nickName,
//       'age': user.age,
//       'email': user.email
//     },
//   });
//
//
// }));

router.get('/', asyncAwaitWrapper( async (req, res) => {
  // const {userId} = req.user;
  const friends = await getFriends()
  res.json({"friends": friends})
}))


module.exports = {
  friendsRout: router,
};
