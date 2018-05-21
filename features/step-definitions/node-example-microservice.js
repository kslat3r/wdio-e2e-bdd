const { Given, When, Then } = require('cucumber');
const UserMockBuilder = require('../support/node-example-microservice/builder/mock/user');
const UsersMockBuilder = require('../support/node-example-microservice/builder/mock/users');
const TodosMockBuilder = require('../support/node-example-microservice/builder/mock/todos');
const getMock = require('../support/generic/get-mock');
const getUrl = require('../support/generic/get-url');
const defaultHeaders = require('../support/node-example-microservice/template/headers/default.json');
const request = require('request-promise');
const UserResponseBuilder = require('../support/node-example-microservice/builder/response/user');
const UsersResponseBuilder = require('../support/node-example-microservice/builder/response/users');
const headerStore = require('../support/generic/store/header');
const responseStore = require('../support/generic/store/response');

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

When(/^I set the default headers for node example microservice API$/, function () {
  headerStore.setAll(defaultHeaders);
});

When(/^I request user with ID (.*)$/, async function (id) {
  const opts = {
    method: 'GET',
    uri: `${getUrl('nodeExampleMicroservice')}/users/${id}`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers: headerStore.getAll()
  };

  let response;

  try {
    response = await request(opts);
  } catch (e) {
    response = {
      statusCode: e.statusCode,
      body: e.error
    };
  }

  responseStore.set(response);
});

When(/^I request all users$/, async function () {
  const opts = {
    method: 'GET',
    uri: `${getUrl('nodeExampleMicroservice')}/users`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers: headerStore.getAll()
  };

  let response;

  try {
    response = await request(opts);
  } catch (e) {
    response = {
      statusCode: e.statusCode,
      body: e.error
    };
  }

  responseStore.set(response);
});

Then(/^I should receive a user with ID (.*) and todos$/, (id) => {
  const user = new UserResponseBuilder(id);

  user.compareTo(responseStore.get().body);
});

Then(/^I should receive a list of users containing ID (.*) and todos$/, (id) => {
  const users = new UsersResponseBuilder(id);

  users.compareTo(responseStore.get().body);
});
