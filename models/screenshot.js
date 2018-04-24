var page = require("webpage").create();
page.open("http://localhost:8080", function(status) {
  page.viewportSize = { width:1024, height:768 };
  page.sendEvent("click",5,5,'left',0);
  slimer.wait(50000);
  page.render('screenshot.png');
});
