var express = require('express');
var router = express.Router();

/* GET screenshot */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res) {
  var mapData = req.body;
  console.log(mapData);
  // Use mapData to generate map
  // take screenshot
  var takeScreenshot = require('../models/screenshot');

   res.send(
     {
       response: {
         success: true,
         image_url: "https://www.map_image.amazon.com"
       }
     }
   );
});

module.exports = router;
