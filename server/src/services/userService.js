const {User} = require('../models/userModel');
const bcrypt = require('bcrypt');
const {BadRequestError} = require('../utils/errorsUtil');


const getFriends = async () => {

  return await User.find({"isFriend" :true})
}


// User can request only his own profile info
// Driver is able to view his profile info;
// Shipper is able to view his profile info;

// const getUsersProfileInfo = async (userId) => {
//   const user = await User.findById(userId);
//   if (!user) {
//     throw new BadRequestError('There is no user whith rovided Id');
//   }
//   return user;
// };


// Shipper is able to delete his account
// User can delete only his own profile info

// const deleteUsersProfile = async (userId) => {
//   const user = await User.findById(userId);
//   console.log('user:'+ user);
//   if ( user.role === 'DRIVER') {
//     const truck = await Truck.findOne({
//       assigned_to: userId,
//       status: 'OL',
//     });
//     console.log('truck:'+ truck);
//     if (truck) {
//       throw new BadRequestError('"DRIVER" is "ON LOAD".Operation cancelled');
//     }
//   }
//   await User.findByIdAndRemove(userId);
// };


// Change user's password
//  Driver is able to change his account password;
// Shipper is able to change his account password;

// const changeUsersPassword = async (userId, newPassword) => {
//   const changedPassword = await bcrypt.hash(newPassword, 5);
//   await User.findOneAndUpdate({_id: userId},
//     {$set: {password: changedPassword}});
// };

module.exports = {
  getFriends,
  // getUsersProfileInfo,
  // deleteUsersProfile,
  // changeUsersPassword,
};
