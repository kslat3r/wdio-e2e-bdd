const { After } = require('cucumber');
const fs = require('fs');
const screenshot = require('../support/screenshot');

const closeDriver = function (driver) {
  if (driver) {
    driver.close();
  }
};

After(function (details, done) {
  if (details.result.status === 'failed') {
    screenshot.capture(this.driver)
      .then((data) => {
        if (data) {
          const filename = `${new Date().getTime()}.png`;

          fs.writeFile(`${__dirname}/../../screenshots/${filename}`, data, 'base64', () => {
            closeDriver(this.driver);

            done();
          });
        }
      });
  } else {
    closeDriver(this.driver);

    done();
  }
});
