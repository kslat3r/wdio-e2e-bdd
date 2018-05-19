/* global browser */

const { Given, When, Then } = require('cucumber');
const google = require('../support/page-object/google');
const { expect } = require('chai');

Given(/^I navigate to Google$/, () => {
  google.go(browser);
});

When(/^I perform a search$/, () => {
  google.search(browser, 'facebook log in');
});

Then(/^the browser title should be correct$/, () => {
  expect(browser.getTitle()).to.equal(`facebook log in ${google.titleSuffix}`);
});
