const { Given, Then } = require('cucumber');
const request = require('request-promise');
const { expect } = require('chai');

let options = {};
let response;

Given(/^I create a GET request to (.*) on node-example-microservice$/, function (endpoint) {
  options = {
    method: 'GET',
    uri: `${this.config.urls.nodeExampleMicroservice}/${endpoint}`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true
  };
});

Given(/^I set the header (.*) to (.*)$/, (header, value) => {
  options.headers = options.headers || {};
  options.headers[header] = value;
});

Given(/^I make the request$/, () => {
  return request(options)
    .then(_response => {
      response = _response;
    })
    .catch(error => {
      response = {
        statusCode: error.statusCode,
        body: error.error
      };
    });
});

Then(/^I should receive the status code (.*)$/, (statusCode) => {
  expect(response.statusCode).to.equal(parseInt(statusCode));
});

Then(/^I should receive the response body (.*)$/, (file) => {
  const json = require(`${__dirname}/../../data/response-body/${file}.json`);

  expect(response.body).to.deep.equal(json);
});
