const cloudinary = require('cloudinary').v2;
const credinetials = require('../cloudinary_key');
const faker = require('faker');
const maxImages = 400;

cloudinary.config({
  cloud_name: credinetials.cloud_name,
  api_key: credinetials.api_key,
  api_secret: credinetials.api_secret
});


const upload = function (maxImages) {
  for (let i = 0; i < maxImages; i++) {
    let link = faker.image.imageUrl(600, 338, 'food', true);
    cloudinary.uploader.upload(link, (err, result) => {
      if (err) {
        console.error('error uploading: ', err);
      }
      console.log('upload succ: ', result);
    });
  }
};

upload(maxImages);