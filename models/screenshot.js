const puppeteer = require('puppeteer');
const awsService = require('../services/awsService');

module.exports = {
  takeScreenshot: (userID, timestamp) => {
    var timestamp = Date.now();
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
      await page.goto(
        'https://arelplane-map-snap.herokuapp.com/' + userID,
        {
          "waitUntil": "networkidle2",
          timeout: 0
        }
      );
      awsService.upload(await page.screenshot(), userID, timestamp);
      await browser.close();
    })();
    return 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + 'map-photos/' + userID + '/' + 'map_' + timestamp + '.png';
  }
}
