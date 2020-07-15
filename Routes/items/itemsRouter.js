const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Array of items');
});

module.exports = router;
