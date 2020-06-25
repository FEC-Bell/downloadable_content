const path = require('path');

const dlcData = require('../data/1-dlcs/dlc.js');
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
  path.resolve('./data'),
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