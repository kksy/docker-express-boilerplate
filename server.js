'use strict'

const express = require('express');
const app = express();
const port = 5000;
const sampleController = require('./src/controllers/sampleController')

app.get('/', (req, res) => {
   res.send('Hello World! This is your first app');
});

app.use('/api', sampleController);

app.listen(5000);

console.log(`App listening at port ${port}`);

module.exports = app;
