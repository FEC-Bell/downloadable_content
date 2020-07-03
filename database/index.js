const mongoose = require('mongoose');
const dlcSchema = new mongoose.Schema({
  dlcId: Number,
  associatedGameId: Number,
  title: String,
  dlcPrice: Number,
  discountRate: Number,
  releaseDate: String,
  totalReviews: Number,
  reviewSummary: String,
  userTags: [String],
  previews: [String],
});
const titleSchema = new mongoose.Schema({
  gameId: Number,
  gameTitle: String
});



const dlc = mongoose.model('dlc', dlcSchema);
const title = mongoose.model('title', titleSchema);

const makeEntry = (data) => {
  dlc.create({
    dlcId: data.dlcId,
    associatedGameId: data.associatedGameId,
    title: data.title,
    dlcPrice: data.dlcPrice,
    discountRate: data.discountRate,
    releaseDate: data.releaseDate,
    totalReviews: data.totalReviews,
    reviewSummary: data.reviewSummary,
    usertags: data.usertags,
    previews: data.previews,
  });
};

const searchDLC = (param, callback) => {
  dlc.find(param, (err, doc) => {
    if (err) {
      console.error(err);
      callback(err);
    }
    callback(null, doc);
  });
};

const searchTitle = (param, callback) => {
  title.find(param, (err, doc) => {
    if (err) {
      console.error(err);
      callback(err);
    }
    callback(null, doc);
  });
};




module.exports.makeEntry = makeEntry;
module.exports.searchDLC = searchDLC;
module.exports.searchTitle = searchTitle;
