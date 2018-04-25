var driver = require('node-phantom-simple');
driver.create({ path: require('slimerjs').path }, function(err, browser) {
  return browser.createPage(function (err, page) {
    return page.open("http://localhost:8080", function(err,status) {
      page.sendEvent("click",5,5,'left',0);
      page.set('viewportSize', { width: 1024, height: 768 }, function() {
        page.set('clipRect', { top: 40, height: 675 }, function() {
          setTimeout(function () {
            page.render('screenshot.png');
            console.log("screenshot taken!");
            browser.exit();
          }, 15000);
        });
      });
    });
  });
});
