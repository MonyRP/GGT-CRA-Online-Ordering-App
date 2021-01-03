const express = require('express');
const router = express.Router();

// route - GET api/menu
// description - test route
// access - Public
router.get('/test-menu', (req, res) => {
  res.send('test-menu route reached');
});

module.exports = router;
