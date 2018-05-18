const { Then } = require('cucumber');
const { expect } = require('chai');
const ErrorResponseBuilder = require('../support/responses/error');
const responseStore = require('../support/stores/response');

Then(/^I should receive the status code (.*)$/, (statusCode) => {
  expect(responseStore.get().statusCode).to.equal(parseInt(statusCode));
});

Then(/^I should receive an error response with status code (.*), error code (.*) and message "(.*)"$/, (statusCode, errorCode, message) => {
  const error = new ErrorResponseBuilder(statusCode, errorCode, message);

  error.compareTo(responseStore.get().body);
});
