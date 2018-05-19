const { When } = require('cucumber');
const getUrl = require('../support/get-url');
const request = require('request-promise');
const standingOrderServiceRequestHeadersTemplate = require('../support/template/headers/standing-order-service-request.json');
const headerStore = require('../support/store/header');
const responseStore = require('../support/store/response');
const body = require('../support/template/request/standing-order-service-request.json');

When(/^I set the default headers for standing order service request API$/, function () {
  headerStore.setAll(standingOrderServiceRequestHeadersTemplate);
});

When(/^I make the request to create a standing order service request$/, async function () {
  const opts = {
    method: 'POST',
    uri: `${getUrl('standingOrderServiceRequestChannelApi')}/standing-order-service-requests`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers: headerStore.getAll(),
    body
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
