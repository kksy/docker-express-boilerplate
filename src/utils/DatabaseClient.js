const MongoClient = require('mongodb').MongoClient;
const config = require('../../config');

const dbUri = config.MONGO_URI;

const DatabaseClient = {
  open: (uri = dbUri) => MongoClient
    .connect(uri)
    .then(client => client)
    .catch(console.error)
};

module.exports = DatabaseClient;
