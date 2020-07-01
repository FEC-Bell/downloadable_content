// const faker = require('faker');
const dlcMaker = require('../../generateDlc.js');
// const maxDlc = 10;
let dlcs = [];

const init = function () {

  dlcs = dlcMaker.generateDlc();
};

init();

module.exports = dlcs;

