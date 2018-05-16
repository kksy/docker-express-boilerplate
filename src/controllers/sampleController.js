'use strict'

const express = require('express');
const router = express.Router();

router.get('/sample', (req, res) => {
  res.json({ data: [] });
});

module.exports = router;
