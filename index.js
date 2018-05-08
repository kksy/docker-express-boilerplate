'use strict'

const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello World! This is your first app');
});

const server = app.listen(5000, () => {
   const host = server.address().address;
   const port = server.address().port;

   console.log(`App listening at http://${host}:${port}`);
});
