const mongoose = require('mongoose');
const dlcSchema = new mongoose.Schema({
  dlcId: Number,
  associatedGameId: Number,
  title: String,
  dlcPrice: Number,
  discountRate: Number,
  releaseDate: String,
  totalReviews: Number,
  review_summary: String,
  userTags: [String],
  previews: [String],
});

const dlc = mongoose.model('dlc', dlcSchema);

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

const search = (param, callback) => {
  dlc.find(param, (err, doc) => {
    if (err) {
      console.error(err);
      callback(err);
    }
    callback(null, doc);
  });
};

module.exports.makeEntry = makeEntry;
module.exports.search = search;
