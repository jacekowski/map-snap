const puppeteer = require('puppeteer');
const awsService = require('../services/awsService');

module.exports = {
  takeScreenshot: (storyID) => {
    (async () => {
      const browser = await puppeteer.launch({
        headless: false,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--headless',
          '--hide-scrollbars'
        ]
      });
      const page = await browser.newPage();
      await page.setViewport({
        width: 690,
        height: 300
      });
      await page.goto(
        'https://arelplane-map-snap.herokuapp.com/story/' + storyID,
        {
          "waitUntil": "networkidle2",
          timeout: 0
        }
      );
      awsService.upload(await page.screenshot(), storyID);
      await browser.close();
    })();
    return 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + 'map-photos/' + 'story_' + storyID + '/' + 'story_map.png';
  }
}
