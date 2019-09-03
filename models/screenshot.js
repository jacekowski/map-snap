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
      page.on('console', msg => console.log('PAGE LOG:', msg.text()));
      await page.setRequestInterception(true);
      page.on("request", request => {
        console.log('REQUEST LOG:',request.url());
        request.continue();
      });
      await page.setViewport({
        width: 690,
        height: 300
      });
      await page.goto(
        process.env.MAPSNAP_ROOT_URL + '/story/' + storyID + "?auth=" + process.env.API_KEY,
        {
          "waitUntil": "networkidle2",
          timeout: 300000
        }
      );
      awsService.upload(await page.screenshot(), storyID);
      await browser.close();
    })();
    return process.env.AWS_S3_ENDPOINT + '/' + process.env.AWS_BUCKET + '/map-photos/' + 'story_' + storyID + '/' + 'story_map.png';
  }
}
