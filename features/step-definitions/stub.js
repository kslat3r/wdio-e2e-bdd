const { Given } = require('cucumber');
const stub = require('../support/stub');
const mock = require('../support/mock');

Given(/^I create the stub (.*) on node-example-microservice-mock$/, function (file) {
  const data = require(`${__dirname}/../../stubs/${file}.json`);
  const mockDetails = mock.get('nodeExampleMicroservice');

  if (mockDetails) {
    return stub.create(mockDetails.host, mockDetails.port, data);
  }
});
