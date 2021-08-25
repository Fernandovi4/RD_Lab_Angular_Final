const express = require('express');
const router = express.Router();
require('bcrypt');
// const {Game} = require('../models/gameModel');

const {
  getLibraryGames,
} = require('../services/gameServisce');

const {
  asyncAwaitWrapper,
} = require('../utils/asyncAwaitWrapper');



router.get('/', asyncAwaitWrapper(async (req, res) => {

  const libraryGames = await getLibraryGames();
  res.json({'myGames': libraryGames});

}));

// router.patch('/:id', asyncAwaitWrapper( async (req, res) => {
//
//   const gameId = req.params.id;
//
//   await addGameToLibrary(gameId);
//
//   res.json({'message': 'game added to library successfully'});
// }));


module.exports = {
  libraryRout: router,
};
