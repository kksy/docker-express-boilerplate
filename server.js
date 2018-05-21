'use strict'

const express = require('express');
const app = express();
const sampleController = require('./src/controllers/sampleController')
const port = 5000;

app.get('/', (req, res) => {
   res.send('Hello World! This is your first app');
});

app.use('/api', sampleController);

app.listen(port);

console.log(`App listening at port ${port}`);

module.exports = app;
