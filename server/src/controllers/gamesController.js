const express = require('express');
const router = express.Router();
require('bcrypt');
// const {Game} = require('../models/gameModel');

const {
  getGames,
  getLibraryGames
} = require('../services/gameServisce');

const {
  asyncAwaitWrapper,
} = require('../utils/asyncAwaitWrapper');

router.get('/', asyncAwaitWrapper(async (req, res) => {

  const games = await getGames();
  res.json({'games': games});

}));

router.get('/library', asyncAwaitWrapper(async (req, res) => {

  const libraryGames = await getLibraryGames();
  res.json({'myGames': libraryGames});

}));


module.exports = {
  gamesRout: router,
};
