var express = require('express');
var router = express.Router();

/* GET prediction2 page. */
router.get('/', function(req, res, next) {
  res.render('prediction2', { title: 'Express' });
});

module.exports = router;

