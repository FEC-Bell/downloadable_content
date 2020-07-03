const cloudinary = require('cloudinary').v2;
const credinetials = require('../cloudinary_key');
const fs = require('fs');
const Promise = require('bluebird');

cloudinary.config(credinetials);


const getphotos = async (max) => {

  let photos = [];
  let nextCursor;
  let searcher = cloudinary.search.max_results(max);
  for (let i = 0; i < 5; i++) {
    let results = [];
    if (nextCursor) {
      searcher = cloudinary.search.max_results(max).nextCursor(nextCursor);
    }
    try {
      results = await searcher.execute();
      nextCursor = results.nextCursor;
      photos = photos.concat(results.resources.map(data => (data.url)));
    } catch (e) {
      console.error(e);
      return;
    }
  }

  fs.writeFile(__dirname + '/raw/photoUrl.js', JSON.stringify(photos), 'utf-8', (err, succ) => {
    if (err) {
      throw err;
    }
    console.log('saved!');
  });
};

getphotos(200);
