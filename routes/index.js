const express = require('express');
const screenshotService = require('../models/screenshot');

const router = express.Router();

/* GET screenshot */
router.get('/story/:story_id', (req, res, next) => {
  if (req.query.auth === process.env.API_KEY) {
    res.render('story/index', {params: req.params});
  } else {
    res.status(403).render('error', {message: "You're not authorized to view this page."});
  }
});

router.post('/story/:story_id', (req, res) => {
  if (req.query.auth === process.env.API_KEY) {
    const storyID = req.params["story_id"]
    const imageURL = screenshotService.takeScreenshot(storyID)

    res.status(200).send({
      response: {
        success: true,
        image_url: imageURL
      }
    });
  } else {
    res.status(403).send({
      response: {
        success: false,
        image_url: null
      }
    });
  }
});

module.exports = router;
