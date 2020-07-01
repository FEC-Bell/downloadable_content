const cloudinary = require('cloudinary').v2;
const credinetials = require('../cloudinary_key');
const Promise = require('bluebird');
const faker = require('faker');
const fs = require('fs');
const maxImages = 1000;

cloudinary.config(credinetials);
var uploadPromise = Promise.promisify(cloudinary.uploader.upload);

const uploader = function (maxImages) {

  let photoArr = [];
  for (let i = 0; i < maxImages; i++) {
    let link = faker.image.imageUrl(600, 338, 'food', true);

    let test = uploadPromise(link).then((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }

};

uploader(maxImages);