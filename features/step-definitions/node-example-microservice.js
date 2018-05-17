const { Given, When, Then } = require('cucumber');
const UserBuilder = require('../support/builders/user');
const UsersBuilder = require('../support/builders/users');
const TodosBuilder = require('../support/builders/todos');
const getMock = require('../support/get-mock');
const getUrl = require('../support/get-url');
const request = require('request-promise');
const { expect } = require('chai');

let headers = {};
let response;

Given(/^user with ID (.*) exists with todos$/, function (id) {
  const promises = [];

  const user = new UserBuilder(id);
  const users = new UsersBuilder(id);
  const todos = new TodosBuilder()
    .setUserId(id);

  const mockDetails = getMock('nodeExampleMicroservice');

  promises.push(users.create(mockDetails));
  promises.push(user.create(mockDetails));
  promises.push(todos.create(mockDetails));

  return Promise.all(promises);
});

When(/^I request user with ID (.*)$/, function (id) {
  const opts = {
    method: 'GET',
    uri: `${getUrl('nodeExampleMicroservice')}/users/${id}`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers
  };

  return request(opts)
    .then(_response => {
      headers = {};
      response = _response;
    })
    .catch(error => {
      headers = {};
      response = {
        statusCode: error.statusCode,
        body: error.error
      };
    });
});

When(/^I request all users$/, function () {
  const opts = {
    method: 'GET',
    uri: `${getUrl('nodeExampleMicroservice')}/users`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers
  };

  return request(opts)
    .then(_response => {
      headers = {};
      response = _response;
    })
    .catch(error => {
      headers = {};
      response = {
        statusCode: error.statusCode,
        body: error.error
      };
    });
});

When(/^I set the header (.*) to (.*)$/, (header, value) => {
  headers = headers || {};
  headers[header] = value;
});

Then(/^I should receive the status code (.*)$/, (statusCode) => {
  expect(response.statusCode).to.equal(parseInt(statusCode));
});

Then(/^I should receive the response body (.*)$/, (file) => {
  const json = require(`${__dirname}/../../data/response-body/${file}.json`);

  expect(response.body).to.deep.equal(json);
});
