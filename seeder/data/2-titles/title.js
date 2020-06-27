const nameList = require('../../raw/game_names');
const { randomizeArr } = require('../../generateDlc');

let titles = [];
const maxGames = 100;

const init = function (max) {
  let gameNames = randomizeArr(nameList);
  console.log(gameNames);
  for (let i = 0; i < max; i++) {
    let game = { gameId: i + 1 };
    game.gameTitle = gameNames[i];
    titles.push(game);
  }
};

init(maxGames);

module.exports = titles;


