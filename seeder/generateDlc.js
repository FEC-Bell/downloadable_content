const faker = require('faker');
const relatedData = require('./raw/related_dlc_data');
var photoUrls = require('./raw/photoUrl');
const maxDlcPrice = 50;
const minDlcPrice = 1;
const maxTags = 15;
const minTags = 1;
const maxPreviews = 4;
const minPreviews = 1;
const maxReviews = 100000;
const maxDlc = 10;
const numGames = 100;
const minYear = 98;

const allUserTags = relatedData.allUserTags;
const reviewRatings = relatedData.reviewRatings;
const discounts = relatedData.discounts;
let dlcId = 1;




/**
 * In place shuffle for arrays
 *
 * @param {Array} arr Array to be shuffled
 * @returns {Array} Array that has been shuffled
 */
const randomizeArr = function (arr) {
  //  fisher-yates shuffle
  let n = arr.length;
  while (n) {
    n -= 1;
    const idx = Math.floor(Math.random() * n);
    const temp = arr[idx];
    arr[idx] = arr[n];
    arr[n] = temp;
  }
  return arr;
};

/**
 * Generates n number of dlcs for a particular game id
 *
 * @param {Int} associatedGameId
 * @param {Int} n number of dlcs
 * @returns {Array} Array with n dlcs
 */
const generateDlc = function () {

  let generatedDlcs = [];

  randomizeArr(discounts);
  randomizeArr(reviewRatings);
  randomizeArr(allUserTags);
  randomizeArr(photoUrls);

  // main loop for number of games
  for (let i = 0; i < numGames; i++) {
    const numDlc = Math.floor(maxDlc * Math.random());

    for (let j = 0; j < numDlc; j++) {
      const dlc = {};
      let numTags = Math.floor(Math.random() * (maxTags - minTags)) + minTags;
      let numPreviews = Math.floor(Math.random() * (maxPreviews - minPreviews)) + minPreviews;

      dlc.associatedGameId = i + 1;
      dlc.dlcId = dlcId;
      dlc.title = faker.fake('{{commerce.productName}}');
      dlc.dlcPrice = Math.floor(Math.random() * (maxDlcPrice - minDlcPrice)) + minDlcPrice;
      dlc.discountRate = discounts[Math.floor(Math.random() * discounts.length)];
      dlc.releaseDate = faker.date.between(new Date(minYear, 0), Date()).toString();
      dlc.totalReviews = Math.floor(Math.random() * maxReviews);
      dlc.reviewSummary = reviewRatings[Math.floor(Math.random() * reviewRatings.length)];
      dlc.userTags = [];
      dlc.previews = [];

      while (numTags) {
        const idx = Math.floor(Math.random() * allUserTags.length);
        const tag = allUserTags[idx];
        if (!dlc.userTags.includes(tag)) {
          dlc.userTags.push(tag);
          numTags -= 1;
        }
      }
      while (numPreviews) {
        const url = photoUrls.splice(0, 1);
        dlc.previews = dlc.previews.concat(url);
        numPreviews -= 1;
      }
      dlcId += 1;
      generatedDlcs.push(dlc);
    }
  }

  return generatedDlcs;
};

exports.generateDlc = generateDlc;
exports.randomizeArr = randomizeArr;