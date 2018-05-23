'use strict'

const express = require('express');
const app = express();
const port = require('./config').APP_PORT;
const sampleController = require('./src/controllers/sampleController');

app.get('/', (req, res) => {
   res.send('Hello World! This is your first app');
});

app.use('/api', sampleController);

app.listen(port);

console.log(`Running on ${process.env.NODE_ENV} server`);
console.log(`App listening at port ${port}`);

module.exports = app;
