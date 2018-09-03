var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* Users */
router.get('/users', function (req, res, next) {
  res.send('list all users here');
});
router.put('/users/:userid', function (req, res, next) {
  res.send('user has been updated');
});
router.delete('/users/:userid', function (req, res, next) {
  res.send('user has been deleted');
});

/* Authentication */
router.post('/register', function (req, res, next) {
  res.send('added to Register');
});
router.post('/login', function (req, res, next) {
  res.send('User logged in.');
});

module.exports = router;