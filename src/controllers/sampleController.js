'use strict'

const router = require('express').Router();
const Sample = require('../models/Sample');

router.get('/sample', async (req, res) => {
  res.json({ data: await Sample.all() });
});

module.exports = router;
