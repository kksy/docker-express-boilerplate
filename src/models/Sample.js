const MongoClient = require('mongodb').MongoClient;

const dbName = 'test';
const dbUri = `mongodb://integration-test-database:27017/`;
const Repository = {
  open: () => MongoClient
    .connect(dbUri)
    .then(client => client)
    .catch(console.error)
};

const Sample = Object.create(Repository, {
  all: {
    value: () => Repository.open()
      .then((client) => {
        const items = client.db(dbName).collection('sample').find().toArray()
        client.close();
        return items;
      }),
    enumerable: false,
  }
});

module.exports = Sample;
