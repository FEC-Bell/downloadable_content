const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const db = require('../database/index.js');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'dist')));


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', function () {
  console.log('mongoose opened!');
});

app.get('/api/dlc/:game_id', (req, res) => {
  let param = { associatedGameId: req.params.game_id };
  db.search(param, (data) => {
    res.send(data);
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})