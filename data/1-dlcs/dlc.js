// const faker = require('faker');
const dlcMaker = require('../../seeder/generateDlc.js');
const maxDlc = 10;
let dlcs = [];

const init = function () {
  for (let i = 0; i < 100; i++) {
    const numDlc = Math.floor(maxDlc * Math.random());
    dlcs = dlcs.concat(dlcMaker.generateDlc(i, numDlc));
  }
};

init();

module.exports = dlcs;

