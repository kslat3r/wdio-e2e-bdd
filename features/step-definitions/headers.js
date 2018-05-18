const { When } = require('cucumber');
const headersStore = require('../support/stores/headers');

When(/^I set the header (.*) to (.*)$/, (header, value) => {
  headersStore.set(header, value);
});
