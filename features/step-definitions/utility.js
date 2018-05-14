const { When } = require('cucumber');
const utility = require('../support/utility');

When(/^I sleep for "([^"]*)" milliseconds$/, function (ms) {
  return utility.sleep.call(this, ms);
});
