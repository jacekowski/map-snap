const express = require('express');

const router = express.Router();

/* GET screenshot */
router.get('/', (req, res, next) => {
  const mapData = { test: 'data' };
  res.render('index', { params: mapData });
});

router.post('/', (req, res) => {
  const mapData = req.body;
  // Use mapData to generate map
  // take screenshot
  const takeScreenshot = require('../models/screenshot');

  res.send({
    response: {
      success: true,
      image_url: 'https://www.map_image.amazon.com',
    },
  });
});

module.exports = router;
