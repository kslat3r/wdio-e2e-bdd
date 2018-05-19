const { When } = require('cucumber');
const headerStore = require('../support/store/header');

When(/^I set the header (.*) to (.*)$/, (header, value) => {
  headerStore.set(header, value);
});
