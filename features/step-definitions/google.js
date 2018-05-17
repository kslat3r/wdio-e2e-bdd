/* global browser */

const { Given, When, Then } = require('cucumber');
const pageObject = require('../page-objects/google');
const { expect } = require('chai');

Given(/^I navigate to Google$/, () => {
  browser.url(pageObject.url);
});

When(/^I perform a search$/, () => {
  browser.element(pageObject.searchBoxSelector)
    .setValue(pageObject.searchTerm)
    .click(pageObject.searchButtonSelector);
});

Then(/^the browser title should be correct$/, () => {
  expect(browser.getTitle()).to.equal(`${pageObject.searchTerm}${pageObject.titleSuffix}`);
});
