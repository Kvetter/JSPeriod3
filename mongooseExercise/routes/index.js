var express = require('express');
var router = express.Router();
var js = require("../public/js/angular");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});


module.exports = router;