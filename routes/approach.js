var express = require('express');
var router = express.Router();

/* GET approach page. */
router.get('/', function(req, res, next) {
  res.render('approach', { title: 'approach' });
});

module.exports = router;