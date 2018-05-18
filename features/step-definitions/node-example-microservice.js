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
const ErrorResponseBuilder = require('../support/responses/error');

let headers = {};
let response;

Given(/^user with ID (.*) exists with todos$/, async function (id) {
  const user = new UserMockBuilder(id);
  const users = new UsersMockBuilder([id]);
  const todos = new TodosMockBuilder()
    .setUserId(id);

  const mockDetails = getMock('nodeExampleMicroservice');

  await users.create(mockDetails);
  await user.create(mockDetails);
  await todos.create(mockDetails);
});

Given(/^user with ID (.*) throws an error from downstream system with statusCode (.*), error code (.*) and message "(.*)"$/, async function (id, statusCode, errorCode, message) {
  const user = new UserMockBuilder(id)
    .setStatusCode(statusCode)
    .setErrorCode(errorCode)
    .setErrorMessage(message);

  const mockDetails = getMock('nodeExampleMicroservice');

  await user.create(mockDetails);
});

Given(/^retrieving all users throws an error from downstream system with statusCode (.*), error code (.*) and message "(.*)"$/, async function (statusCode, errorCode, message) {
  const users = new UsersMockBuilder([1]);

  const mockDetails = getMock('nodeExampleMicroservice');

  await users.create(mockDetails);
});

When(/^I request user with ID (.*)$/, async function (id) {
  const opts = {
    method: 'GET',
    uri: `${getUrl('nodeExampleMicroservice')}/users/${id}`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers
  };

  try {
    response = await request(opts);
  } catch (e) {
    response = {
      statusCode: e.statusCode,
      body: e.error
    };
  }

  headers = {};
});

When(/^I request all users$/, async function () {
  const opts = {
    method: 'GET',
    uri: `${getUrl('nodeExampleMicroservice')}/users`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers
  };

  try {
    response = await request(opts);
  } catch (e) {
    response = {
      statusCode: e.statusCode,
      body: e.error
    };
  }

  headers = {};
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

Then(/^I should receive an error response with status code (.*), error code (.*) and message "(.*)"$/, (statusCode, errorCode, message) => {
  const error = new ErrorResponseBuilder(statusCode, errorCode, message);

  error.compareTo(response.body);
});
