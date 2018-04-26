const driver = require('node-phantom-simple');
function takeScreenshot(userId) {
  driver.create({ path: require('slimerjs').path }, (e, browser) => browser.createPage((err, page) => page.open('http://localhost:8080/${userId}', (error, status) => {
    page.sendEvent('click', 5, 5, 'left', 0);
    page.set('viewportSize', { width: 1024, height: 768 }, () => {
      page.set('clipRect', { top: 40, height: 675 }, () => {
        setTimeout(() => {
          page.render('screenshot.png');
          console.log('screenshot taken!');
          browser.exit();
        }, 15000);
      });
    });
  })));
}

module.exports = takeScreenshot;
