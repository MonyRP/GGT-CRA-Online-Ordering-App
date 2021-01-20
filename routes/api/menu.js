const express = require('express');
const router = express.Router();

// Temp meals
const meals = require('../../tempData/meals');

// route - GET api/menu
// description - test route
// access - Public
router.get('/menu-items', (req, res) => {
  res.json(meals);
});

module.exports = router;
