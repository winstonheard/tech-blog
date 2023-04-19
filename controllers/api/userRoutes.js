const router = require('express').Router();
const { User } = require('../../models');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// User login
router.post('/login', async (req, res) => {
  // ... implement the login logic here ...
});

// User logout
router.post('/logout', (req, res) => {
  // ... implement the logout logic here ...
});

module.exports = router;