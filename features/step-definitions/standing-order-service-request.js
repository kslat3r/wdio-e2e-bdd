const { When, Then } = require('cucumber');
const getUrl = require('../support/common/get-url');
const merge = require('deepmerge');
const request = require('request-promise');
const defaultHeaders = require('../support/standing-order-service-request/template/headers/default.json');
const headerStore = require('../support/common/store/header');
const responseStore = require('../support/common/store/response');
const StandingOrderServiceRequestRequestBuilder = require('../support/standing-order-service-request/builder/request/standing-order-service-request.js');
const StandingOrderServiceRequestResponseBuilder = require('../support/standing-order-service-request/builder/response/standing-order-service-request.js');

const defaultOpts = {
  method: 'POST',
  uri: `${getUrl('standingOrderServiceRequestChannelApi')}/standing-order-service-requests`,
  json: true,
  timeout: 100000,
  resolveWithFullResponse: true
};

When(/^I create a standing order service request with default headers$/, async function () {
  const body = new StandingOrderServiceRequestRequestBuilder()
    .get();

  headerStore.setAll(defaultHeaders);

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

When(/^I create a standing order service request that has different payment amounts with default headers$/, async function () {
  const body = new StandingOrderServiceRequestRequestBuilder()
    .setFirstPaymentAmount(1.00)
    .setNextPaymentAmount(2.00)
    .setFinalPaymentAmount(2.00)
    .get();

  headerStore.setAll(defaultHeaders);

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

When(/^I create a standing order service request that has different payment date\/times with default headers$/, async function () {
  const body = new StandingOrderServiceRequestRequestBuilder()
    .setFirstPaymentDateTime('2014-04-16T16:20:43.154Z')
    .setNextPaymentDateTime('2015-04-16T16:20:43.154Z')
    .setFinalPaymentDateTime('2016-04-16T16:20:43.154Z')
    .get();

  headerStore.setAll(defaultHeaders);

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

Then(/^I should receive a standing order service request response$/, function () {
  const responseBody = responseStore.get().body;

  const id = responseBody.Data.StandingOrderServiceRequestId;
  const creationDateTime = responseBody.Data.CreationDateTime;
  const statusUpdateDateTime = responseBody.Data.StatusUpdateDateTime;

  const standingOrderServiceRequest = new StandingOrderServiceRequestResponseBuilder(id, creationDateTime, statusUpdateDateTime);

  standingOrderServiceRequest.compareTo(responseBody);
});
