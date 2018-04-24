var driver = require('node-phantom-simple');
driver.create({ path: require('slimerjs').path }, function (err, browser) {
  return browser.createPage(function (err, page) {
    return page.open("http://localhost:8080", function (err,status) {
      console.log("opened site? ", status);
      // setTimeout(function () {
        page.viewportSize = { width:1024, height:768 };
        page.sendEvent("click",5,5,'left',0);
        page.render('screenshot.png');
        console.log("screenshot taken!");
        page.get('content', function (err, html) {
          console.log("Page HTML is: " + html);
        });
        browser.exit();
      // }, 50000);
	  });
  });
});


// var page = require('webpage').create();
// page.open("http://localhost:8080", function(status) {
//   page.viewportSize = { width:1024, height:768 };
//   page.sendEvent("click",5,5,'left',0);
//   slimer.wait(50000);
//   page.render('screenshot.png');
//   slimer.exit();
// });
