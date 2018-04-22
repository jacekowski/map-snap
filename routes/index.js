var takeScreenshot = require('../models/screenshot');

var express = require('express');
var router = express.Router();

var screenshot = {location:"https://www.image_location.com/wow"}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(screenshot);
});

module.exports = router;
