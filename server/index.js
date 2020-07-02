const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', function () {
  console.log('mongoose opened!');
});

app.get('/api/dlc/:gameId', (req, res) => {
  let param = { associatedGameId: req.params.gameId };
  console.log('GET received, ID= ' + param.associatedGameId);
  db.searchDLC(param, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (data.length) {
        res.send(data);
      } else {
        res.status(404).send('Game ID not found!');
      }
    }
  });
});

app.get('api/name/:gameId', (req, res) => {
  let param = { gameId: req.params.gameId };
  db.searchTitle(param, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (data.length) {
        res.send(data);
      } else {
        res.status(404).send('Game ID not found!');
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});