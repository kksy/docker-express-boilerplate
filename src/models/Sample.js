'use strict'

const DatabaseClient = require('../utils/DatabaseClient');

const collectionName = 'sample';
const databaseName = 'test';

const Sample = {
  all: () => DatabaseClient
    .open()
    .then((client) => {
      const items = client
        .db(databaseName)
        .collection(collectionName)
        .find()
        .toArray();

      client.close();
      return items;
    }),
};

module.exports = Sample;
