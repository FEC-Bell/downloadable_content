const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test,', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('mongoose opened!');
});

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
  previews: [String]
});

const dlc = mongoose.model('DLC', dlcSchema);

var makeEntry = (data) => {
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
    previews: data.previews
  })
};

var search = (gameId, CB) => {
  var results = dlc.find({ associatedGameId: gameId });
  results.then((doc) => {
    CB(doc)
  });
};

module.exports.makeEntry = makeEntry;
module.exports.search = search;