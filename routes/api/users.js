const express = require('express');
const router = express.Router();

const User = require('../../modules/user');

// route - POST api/users/signup-user
// description - registers new user
// access - public
router.post('/signup-user', async (req, res) => {
  console.log('req.body:', req.body);

  try {
    let existingUser = await User.findOne({ username: req.body.username });

    // console.log('search1.length: ' + search1.length);
    // console.log('search2.length: ' + search2.length);

    if (!existingUser) {
      let userEntry = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      userEntry.save();

      res.status(200).send('User credential saved successfuly.');
    } else {
      console.log('sending 200;');
      res.status(400).send('Server error. User credential already already exists.');
    }
    
  } catch (error) {
    console.log('/signup-user: ' + error);
  }

});

module.exports = router;
