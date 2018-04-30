const puppeteer = require('puppeteer');

module.exports = {
  takeScreenshot: (userId) => {
    (async () => {
      const browser = await puppeteer.launch({
        headless: false,
        args: [
          '--headless',
          '--hide-scrollbars'
        ]
      });
      const page = await browser.newPage();
      await page.goto(
        'https://www.arelplane.com/' + userId,
        {
          "waitUntil": "networkidle2",
          timeout: 0
        }
      );
      await page.screenshot({path: 'example.png'});

      await browser.close();
    })();
    return "Successful API call!";
  }
}
