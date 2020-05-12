var express = require('express');
var router = express.Router();

/* GET forecast page. */
router.get('/', function(req, res, next) {
  res.render('solution2', { title: 'About' });
});

module.exports = router;