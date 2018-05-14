
const { When, Then } = require('cucumber');
const element = require('../support/element');
const utility = require('../support/utility');
const expect = require('chai').expect;

When(/^I click the element with ID "([^"]*)"$/, function (id) {
  return utility.waitForElementLocatedById.call(this, id, 3000)
    .then(() => {
      return element.findById.call(this, id);
    })
    .then((elem) => {
      return elem.click();
    });
});

When(/^I click the element with class "([^"]*)"$/, function (className) {
  return utility.waitForElementLocatedByClassName.call(this, className, 3000)
    .then(() => {
      return element.findByClassName.call(this, className);
    })
    .then((elem) => {
      return elem.click();
    });
});

When(/^I click the element with tag "([^"]*)"$/, function (tagName) {
  return utility.waitForElementLocatedByTagName.call(this, tagName, 3000)
    .then(() => {
      return element.findByTagName.call(this, tagName);
    })
    .then((elem) => {
      return elem.click();
    });
});

When(/^I click the element with name "([^"]*)"$/, function (name) {
  return utility.waitForElementLocatedByName.call(this, name, 3000)
    .then(() => {
      return element.findByName.call(this, name);
    })
    .then((elem) => {
      return elem.click();
    });
});

When(/^I click the element with link text "([^"]*)"$/, function (linkText) {
  return utility.waitForElementLocatedByLinkText.call(this, linkText, 3000)
    .then(() => {
      return element.findByLinkText.call(this, linkText);
    })
    .then((elem) => {
      return elem.click();
    });
});

When(/^I click the element with partial link text "([^"]*)"$/, function (partialLinkText) {
  return utility.waitForElementLocatedByPartialLinkText.call(this, partialLinkText, 3000)
    .then(() => {
      return element.findByPartialLinkText.call(this, partialLinkText);
    })
    .then((elem) => {
      return elem.click();
    });
});

When(/^I click the element with CSS selector "([^"]*)"$/, function (css) {
  return utility.waitForElementLocatedByCss.call(this, css, 3000)
    .then(() => {
      return element.findByCss.call(this, css);
    })
    .then((elem) => {
      return elem.click();
    });
});

When(/^I click the element with XPath "([^"]*)"$/, function (xpath) {
  return utility.waitForElementLocatedByXPath.call(this, xpath, 3000)
    .then(() => {
      return element.findByXPath.call(this, xpath);
    })
    .then((elem) => {
      return elem.click();
    });
});

// existence

Then(/^the element with ID "([^"]*)" should exist$/, function (id) {
  return element.findById.call(this, id);
});

Then(/^the element with class "([^"]*)" should exist$/, function (className) {
  return element.findByClassName.call(this, className);
});

Then(/^the element with tag "([^"]*)" should exist$/, function (tagName) {
  return element.findByTagName.call(this, tagName);
});

Then(/^the element with name "([^"]*)" should exist$/, function (name) {
  return element.findByName.call(this, name);
});

Then(/^the element with link text "([^"]*)" should exist$/, function (linkText) {
  return element.findByLinkText.call(this, linkText);
});

Then(/^the element with partial link text "([^"]*)" should exist$/, function (partialLinkText) {
  return element.findByPartialLinkText.call(this, partialLinkText);
});

Then(/^the element with CSS selector "([^"]*)" should exist$/, function (css) {
  return element.findByCss.call(this, css);
});

Then(/^the element with XPath "([^"]*)" should exist$/, function (xpath) {
  return element.findByXPath.call(this, xpath);
});

Then(/^there should be "([^"]*)" instances of the element with class "([^"]*)"$/, function (num, className) {
  return element.findManyByClassName.call(this, className)
    .then((elems) => {
      expect(elems.length).to.equal(parseInt(num, 10));
    });
});

Then(/^there should be "([^"]*)" instances of the element with tag "([^"]*)"$/, function (num, tagName) {
  return element.findManyByTagName.call(this, tagName)
    .then((elems) => {
      expect(elems.length).to.equal(parseInt(num, 10));
    });
});

Then(/^there should be "([^"]*)" instances of the element with link text "([^"]*)"$/, function (num, linkText) {
  return element.findManyByLinkText.call(this, linkText)
    .then((elems) => {
      expect(elems.length).to.equal(parseInt(num, 10));
    });
});

Then(/^there should be "([^"]*)" instances of the element with partial link text "([^"]*)"$/, function (num, partialLinkText) {
  return element.findManyByPartialLinkText.call(this, partialLinkText)
    .then((elems) => {
      expect(elems.length).to.equal(parseInt(num, 10));
    });
});

Then(/^there should be "([^"]*)" instances of the element with CSS selector "([^"]*)"$/, function (num, css) {
  return element.findManyByCss.call(this, css)
    .then((elems) => {
      expect(elems.length).to.equal(parseInt(num, 10));
    });
});
