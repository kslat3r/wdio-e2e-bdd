const { When } = require('cucumber');
const getUrl = require('../support/get-url');
const request = require('request-promise');
const headersStore = require('../support/stores/headers');
const responseStore = require('../support/stores/response');
const body = require('../support/templates/standing-order-service-request.json');

When(/^I make a request to create a standing order service request$/, async function () {
  const opts = {
    method: 'POST',
    uri: `${getUrl('standingOrderServiceRequestChannelApi')}/standing-order-service-requests`,
    json: true,
    timeout: 100000,
    resolveWithFullResponse: true,
    headers: headersStore.getAll(),
    body
  };

  console.log(opts);

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
