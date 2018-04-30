const express = require('express');
const screenshotService = require('../models/screenshot');

const router = express.Router();

/* GET screenshot */
router.get('/:user_id', (req, res, next) => {
  res.render('index', {params: req.params});
});

router.post('/:user_id', (req, res) => {
  const userID = req.params["user_id"]
  const imageURL = screenshotService.takeScreenshot(userID)

  res.send({
    response: {
      success: true,
      image_url: imageURL,
    },
  });
});

module.exports = router;
