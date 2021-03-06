const express = require('express');
const path = require('path');
const compression =  require('compression');
const db = require('../database/index.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/app/:gameid', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.get('/api/dlc/:gameId', (req, res) => {
  let gameId = parseInt(req.params.gameId);
  console.log('GET received, ID= ' + gameId);
  if (isNaN(gameId) || gameId === undefined) {
    res.status(500).send('invalid search!');
  } else {
    let param = { associatedGameId: gameId };

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
  }

});

app.get('/api/name/:gameId', (req, res) => {
  let gameId = parseInt(req.params.gameId);
  if (isNaN(gameId) || gameId === undefined) {
    res.status(500).send('invalid search!');
  } else {
    let param = { gameId: gameId };
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
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});