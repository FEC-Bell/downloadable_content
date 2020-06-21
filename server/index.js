const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

let app = express();



db.search(12, (data) => {
  console.log('db data: ', data);
})