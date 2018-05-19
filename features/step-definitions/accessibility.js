/* global browser */

const { Then } = require('cucumber');
const axe = require('axe-core');
const { expect } = require('chai');

Then(/^the page should pass accessibility guidelines$/, () => {
  browser.execute(axe.source);

  const results = browser.executeAsync((done) => {
    axe.run((err, results) => {
      if (err) {
        return done(err);
      }

      return done(results);
    });
  });

  expect(results.value.violations.length).to.equal(0);
});
