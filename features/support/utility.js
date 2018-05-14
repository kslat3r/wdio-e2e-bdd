const seleniumWebdriver = require('selenium-webdriver');

module.exports = {
  wait (condition, ms) {
    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedById (id, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ id });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByClassName (className, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ className });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByTagName (tagName, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ tagName });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByName (name, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ name });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByLinkText (linkText, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ linkText });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByPartialLinkText (partialLinkText, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ partialLinkText });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByCss (css, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ css });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByXPath (xpath, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ xpath });

    return this.driver.wait(condition, ms);
  },

  sleep (ms) {
    return this.driver.sleep(ms);
  },

  takeScreenshot () {
    return this.driver.takeScreenshot();
  }
};
