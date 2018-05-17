const { Given, When, Then } = require('cucumber');
const UserMockBuilder = require('../support/mocks/user');
const UsersMockBuilder = require('../support/mocks/users');
const TodosMockBuilder = require('../support/mocks/todos');
const getMock = require('../support/get-mock');
const getUrl = require('../support/get-url');
const request = require('request-promise');
const { expect } = require('chai');
const UserResponseBuilder = require('../support/responses/user');
const UsersResponseBuilder = require('../support/responses/users');

let headers = {};
let response;

Given(/^user with ID (.*) exists with todos$/, function (id) {
  const promises = [];

  const user = new UserMockBuilder(id);
  const users = new UsersMockBuilder(id);
  const todos = new TodosMockBuilder()
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

Then(/^I should receive a user with ID (.*) and todos$/, (id) => {
  const user = new UserResponseBuilder(id);

  user.compareTo(response.body);
});

Then(/^I should receive a list of users containing ID (.*) and todos$/, (id) => {
  const users = new UsersResponseBuilder(id);

  users.compareTo(response.body);
});
