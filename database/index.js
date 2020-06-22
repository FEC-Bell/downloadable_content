const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/test,', { useNewUrlParser: true });

// const connection = mongoose.connection;
// connection.on('error', console.error.bind(console, 'connection error'));
// connection.once('open', function () {
//   console.log('mongoose opened!');
//   //console.log(connection.collections);

// });

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

const search = (gameId, CB) => {
  console.log('ID: ', gameId);
  dlc.find({ associatedGameId: gameId }, (err, doc) => {
    if (err) {
      console.error(err);
    }
    CB(doc);
  });
};

module.exports.makeEntry = makeEntry;
module.exports.search = search;
