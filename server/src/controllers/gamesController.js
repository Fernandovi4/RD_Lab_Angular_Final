const express = require('express');
const router = express.Router();
require('bcrypt');
// const {Game} = require('../models/gameModel');

const {
  getGames,
  addGameToLibrary
} = require('../services/gameServisce');

const {
  asyncAwaitWrapper,
} = require('../utils/asyncAwaitWrapper');

router.get('/', asyncAwaitWrapper(async (req, res) => {

  const games = await getGames();

  res.json({'games': games});

}));


router.patch('/:id', asyncAwaitWrapper( async (req, res) => {

  const gameId = req.params.id;

  await addGameToLibrary(gameId);

  res.json({'message': 'game added to library successfully'});
}));


module.exports = {
  gamesRout: router,
};
