const path = require('path');

const gameNames = require('./data/2-titles/title');
const dlcData = require('./data/1-dlcs/dlc');
const { Seeder } = require('mongo-seeding');

const config = {
  database: {
    name: 'test',
    host: 'localhost'
  },
  dropDatabase: true,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve('./seeder/data'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

seeder
  .import(collections)
  .then(() => {
    console.log('Seed Success');
  })
  .catch(err => {
    console.log('Err Seeding ', err);
  });