'use strict'

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
   res.send('Hello World! This is your first app');
});

app.listen(5000);

console.log(`App listening at port ${port}`);

module.exports = app;
