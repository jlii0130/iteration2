var express = require('express');
var router = express.Router();

/* GET twoway page page. */
router.get('/', function(req, res, next) {
  res.render('twoway', { title: 'About' });
});

module.exports = router;