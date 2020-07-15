const express = require('express');
const router = express.Router();
const { subscribeFiles } = require('../../AddOns/Redis/actions');

router.get('/', (req, res) => {
  subscribeFiles();
  res.send('Array of orders');
});

module.exports = router;
