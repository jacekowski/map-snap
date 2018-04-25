const express = require('express');
const router = express.Router();

/* GET screenshot */
router.get('/', function (req, res, next) {
  const mapData = {'test': 'data'}
  res.render('index', {params: mapData});
});

router.post('/', function (req, res) {
  const mapData = req.body;
  render('index', {params: mapData})
  // Use mapData to generate map
  // take screenshot
  const takeScreenshot = require('../models/screenshot');

   res.send(
     {
       response: {
         success: true,
         image_url: 'https://www.map_image.amazon.com'
       }
     }
   );
});

module.exports = router;
