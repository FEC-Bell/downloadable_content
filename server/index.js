const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', function () {
  console.log('mongoose opened!');

  connection.db.collection("dlcs", function (err, collection) {
    //console.log(collection.find());
    // collection.find().toArray(function (err, data) {
    //   if (err) {
    //     console.error('ERR ', err);
    //   }
    //   console.log(data); // it will print your collection data
    // })
  });

  db.search(18, (data) => {
    console.log('db data: ', data);
  })
});

// db.search(18, (data) => {
//   console.log('db data: ', data);
// })