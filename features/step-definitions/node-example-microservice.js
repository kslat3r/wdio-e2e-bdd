const { Given, When, Then } = require('cucumber');
const merge = require('deepmerge');
const UserMockBuilder = require('../support/node-example-microservice/builder/mock/user');
const UsersMockBuilder = require('../support/node-example-microservice/builder/mock/users');
const TodosMockBuilder = require('../support/node-example-microservice/builder/mock/todos');
const getMock = require('../support/common/get-mock');
const getUrl = require('../support/common/get-url');
const defaultHeaders = require('../support/node-example-microservice/template/headers/default.json');
const request = require('request-promise');
const UserResponseBuilder = require('../support/node-example-microservice/builder/response/user');
const UsersResponseBuilder = require('../support/node-example-microservice/builder/response/users');
const headerStore = require('../support/common/store/header');
const responseStore = require('../support/common/store/response');

const defaultOpts = {
  method: 'GET',
  uri: `${getUrl('nodeExampleMicroservice')}/users`,
  json: true,
  timeout: 100000,
  resolveWithFullResponse: true
};

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

When(/^I request user with ID (.*) with no headers$/, async function (id) {
  const opts = merge(defaultOpts, {
    uri: `${defaultOpts.uri}/${id}`,
    headers: {}
  });

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

When(/^I request user with ID (.*) with default headers$/, async function (id) {
  headerStore.setAll(defaultHeaders);

  const opts = merge(defaultOpts, {
    uri: `${defaultOpts.uri}/${id}`,
    headers: headerStore.getAll()
  });

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

When(/^I request all users with no headers$/, async function () {
  headerStore.deleteAll();

  const opts = merge(defaultOpts, {
    headers: {}
  });

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

When(/^I request all users with default headers$/, async function () {
  headerStore.setAll(defaultHeaders);

  const opts = merge(defaultOpts, {
    headers: headerStore.getAll()
  });

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
