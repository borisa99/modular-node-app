const express = require('express');
const router = express.Router();
const { getRedis } = require('../../AddOns/Redis/actions');

router.get('/', (req, res) => {
  getRedis('foo');
  res.send('Users Route');
});

module.exports = router;
