const { Given, When, Then } = require('cucumber');
const getUrl = require('../support/get-url');
const merge = require('deepmerge');
const request = require('request-promise');
const standingOrderServiceRequestHeadersTemplate = require('../support/template/headers/standing-order-service-request.json');
const headerStore = require('../support/store/header');
const responseStore = require('../support/store/response');
const StandingOrderServiceRequestRequestBuilder = require('../support/builder/request/standing-order-service-request');
const StandingOrderServiceRequestResponseBuilder = require('../support/builder/response/standing-order-service-request');

Given(/^I set the default headers for standing order service request API$/, function () {
  headerStore.setAll(standingOrderServiceRequestHeadersTemplate);
});

const defaultOpts = {
  method: 'POST',
  uri: `${getUrl('standingOrderServiceRequestChannelApi')}/standing-order-service-requests`,
  json: true,
  timeout: 100000,
  resolveWithFullResponse: true
};

When(/^I create a standing order service request that is valid$/, async function () {
  const body = new StandingOrderServiceRequestRequestBuilder()
    .get();

  const opts = merge(defaultOpts, {
    headers: headerStore.getAll(),
    body
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

When(/^I create a standing order service request that has different payment amounts$/, async function () {
  const body = new StandingOrderServiceRequestRequestBuilder()
    .setFirstPaymentAmount(1.00)
    .setNextPaymentAmount(2.00)
    .setFinalPaymentAmount(2.00)
    .get();

  const opts = merge(defaultOpts, {
    headers: headerStore.getAll(),
    body
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

When(/^I create a standing order service request that has different payment date\/times$/, async function () {
  const body = new StandingOrderServiceRequestRequestBuilder()
    .setFirstPaymentDateTime('2014-04-16T16:20:43.154Z')
    .setNextPaymentDateTime('2015-04-16T16:20:43.154Z')
    .setFinalPaymentDateTime('2016-04-16T16:20:43.154Z')
    .get();

  const opts = merge(defaultOpts, {
    headers: headerStore.getAll(),
    body
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

Then(/^I should receive a standing order service request response that is valid$/, function () {
  const responseBody = responseStore.get().body;

  const id = responseBody.Data.StandingOrderServiceRequestId;
  const creationDateTime = responseBody.Data.CreationDateTime;
  const statusUpdateDateTime = responseBody.Data.StatusUpdateDateTime;

  const standingOrderServiceRequest = new StandingOrderServiceRequestResponseBuilder(id, creationDateTime, statusUpdateDateTime);

  standingOrderServiceRequest.compareTo(responseBody);
});
