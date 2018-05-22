const environment = process.env.NODE_ENV || 'development';

const config = {
  development: {
    MONGO_URI: 'mongodb://database:27017/',
  },
  test: {
    MONGO_URI: 'mongodb://integration-test-database:27017/',
  },
  production: {
    MONGO_URI: '',
  },
};

module.exports = config[environment];
