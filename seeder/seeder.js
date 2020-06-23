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

//console.log(dlcData);


const seeder = new Seeder(config);


var collections = seeder.readCollectionsFromPath(
  path.resolve('./data'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

console.log('collections: ', collections);

seeder
  .import(collections)
  .then(() => {
    console.log('Seed Success');
  })
  .catch(err => {
    console.log('Err Seeding ', err);
  });