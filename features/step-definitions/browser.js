const { Given, When, Then } = require('cucumber');
const browser = require('../support/browser');
const expect = require('chai').expect;

Given(/^I navigate to "([^"]*)"$/, function (url) {
  return browser.getUrl.call(this, url);
});

When(/^When I navigate to "([^"]*)"$/, function (url) {
  return browser.getUrl.call(this, url);
});

When(/^I get the browser title"$/, function () {
  return browser.getTitle.call(this);
});

Then(/^the browser title should be "([^"]*)"$/, function (title) {
  return browser.getTitle.call(this)
    .then((browserTitle) => {
      expect(title).to.equal(browserTitle);
    });
});

When(/^I switch to the window named "([^"]*)"$/, function (windowName) {
  return browser.switchToWindow.call(this, windowName);
});

When(/^I switch to the frame named "([^"]*)"$/, function (frameName) {
  return browser.switchToFrame.call(this, frameName);
});

When(/^I go back in the browser$/, function () {
  return browser.goBack.call(this);
});

When(/^I go forward in the browser$/, function () {
  return browser.goForward.call(this);
});

When(/^I set the browser size to "([^"]*)" height and "([^"]*)" width$/, function (height, width) {
  return browser.setWindowSize.call(this, height, width);
});
