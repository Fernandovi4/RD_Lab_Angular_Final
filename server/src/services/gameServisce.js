const {Game} = require("../models/gameModel");


const getGames = async () => {

  return await Game.find();

};

const getLibraryGames = async () => {

  const libraryGames = await Game.find({'isInLibrary': true})
  return libraryGames
}


module.exports = {
  getGames,
  getLibraryGames
};
