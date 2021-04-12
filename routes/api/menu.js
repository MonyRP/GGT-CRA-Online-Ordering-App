const express = require('express');
const router = express.Router();

// Temp meals
const meals = require('../../tempData/meals');

// route - GET api/menu/menu-items
// description - gets all menu items
// access - public
router.get('/menu-items', (req, res) => {
  res.json(meals);
});

// route - GET api/menu/menu-categories
// description - gets all available menu categories
// access - public
router.get('/menu-categories', (req, res) => {
  let categories = [];

  meals.forEach(meal => {
    categories.push(meal.category);
  })

  res.json(categories);
});

module.exports = router;
