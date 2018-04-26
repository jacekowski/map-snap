const express = require('express');
const screenshotService = require('../models/screenshot');

const router = express.Router();

/* GET screenshot */
router.get('/:user_id', (req, res, next) => {
  res.render('index', {params: req.params});
});

router.post('/:user_id', (req, res) => {
  const userId = req.params["user_id"]
  screenshotService.takeScreenshot(userId)
  // Turn screenshot code into function and make user_id an argument
  // pass in userId and go from there.
  // take screenshot

  res.send({
    response: {
      success: true,
      image_url: 'https://www.map_image.amazon.com',
    },
  });
});

module.exports = router;
