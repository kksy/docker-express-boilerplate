const environment = process.env.NODE_ENV || 'development';

const config = {
  development: {
    MONGO_URI: 'mongodb://database:27017/',
    APP_PORT: 5000,
  },
  test: {
    MONGO_URI: 'mongodb://integration-test-database:27017/',
    APP_PORT: 5000,
  },
  production: {
    // uri comes from env var in heroku
    MONGO_URI: process.env.MONGODB_URI,
    APP_PORT: process.env.PORT || 5000
  },
};

module.exports = config[environment];
