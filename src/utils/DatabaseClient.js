const MongoClient = require('mongodb').MongoClient;

const host = process.env.NODE_ENV === 'test' ?  'integration-test-database' : 'database';
const dbUri = `mongodb://${host}:27017/`;
const DatabaseClient = {
  open: () => MongoClient
    .connect(dbUri)
    .then(client => client)
    .catch(console.error)
};

module.exports = DatabaseClient;
