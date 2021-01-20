function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const meals = [
  {
    category: 'Apetizers',
    items: [
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      }
    ]
  },
  {
    category: 'Breakfast',
    items: [
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      }
    ]
  },
  {
    category: 'Lunch',
    items: [
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      }
    ]
  },
  {
    category: 'Dinner',
    items: [
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      },
      {
        mealName: 'Lorem ipsum dolor sit amet',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam.',
        price: getRandomInt(5) + 3.99
      }
    ]
  }
];

module.exports = meals;
