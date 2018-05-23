const environment = process.env.NODE_ENV || 'development';
const appPort = process.env.PORT || 5000;

const config = {
  development: {
    MONGO_URI: 'mongodb://database:27017/',
    APP_PORT: appPort,
  },
  test: {
    MONGO_URI: 'mongodb://integration-test-database:27017/',
    APP_PORT: appPort,
  },
  production: {
    // uri comes from env var in heroku
    MONGO_URI: process.env.MONGODB_URI,
    APP_PORT: appPort,
  },
};

module.exports = config[environment];
