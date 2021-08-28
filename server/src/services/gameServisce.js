const {Game} = require("../models/gameModel");
const {BadRequestError} = require("../utils/errorsUtil");


const getGames = async () => {

  return await Game.find({'isInLibrary': false});

};

const getLibraryGames = async () => {

  return await Game.find({'isInLibrary': true})
}

const addGameToLibrary = async (gameId) => {
  console.log(gameId)
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
