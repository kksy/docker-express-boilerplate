'use strict'

const DatabaseClient = require('../utils/DatabaseClient');

const Sample = Object.create(DatabaseClient, {
  all: {
    value: () => DatabaseClient.open()
      .then((client) => {
        const items = client.db('test').collection('sample').find().toArray()
        client.close();
        return items;
      }),
    enumerable: true,
    configurable: true,
  }
});

module.exports = Sample;
