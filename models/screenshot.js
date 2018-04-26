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
        'http://localhost:8080/' + userId,
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

// module.exports = {
//   takeScreenshot: (userId) => {
//     driver.create({ path: require('slimerjs').path }, (e, browser) => browser.createPage((err, page) => page.open('http://localhost:8080/' + userId, (error, status) => {
//       page.sendEvent('click', 5, 5, 'left', 0);
//       page.set('viewportSize', { width: 1024, height: 768 }, () => {
//         page.set('clipRect', { top: 40, height: 675 }, () => {
//           setTimeout(() => {
//             page.render('screenshot.png');
//             browser.exit();
//           }, 15000);
//         });
//       });
//     })));
//     return "Successful API call!";
//   }
// };
