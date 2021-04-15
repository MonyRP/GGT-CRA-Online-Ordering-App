const express = require('express');
const router = express.Router();

// route - POST api/users/signup-user
// description - registers new user
// access - public
router.post('/signup-user', (req, res) => {
  console.log('req.body:', req.body);
  res.json(req.body);
});

module.exports = router;
