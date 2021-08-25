const {Game} = require("../models/gameModel");
const {BadRequestError} = require("../utils/errorsUtil");


const getGames = async () => {

  return await Game.find({'isInLibrary': false});

};

const getLibraryGames = async () => {

  const libraryGames = await Game.find({'isInLibrary': true})

  return libraryGames
}

const addGameToLibrary = async (gameId) => {

  const game = await Game.findByIdAndUpdate(
    gameId, { 'isInLibrary': true });

  if (!game) {
    throw new BadRequestError('Can not find with this id');
  }
}


module.exports = {
  getGames,
  getLibraryGames,
  addGameToLibrary
};
