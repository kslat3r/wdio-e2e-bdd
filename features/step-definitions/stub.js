const { Given } = require('cucumber');
const createStub = require('../support/create-stub');

Given(/^I create the stub (.*) on node-example-microservice-mock$/, function (file) {
  const stub = require(`${__dirname}/../../stubs/${file}.json`);

  return createStub(this.config.mock.nodeExampleMicroservice.host, this.config.mock.nodeExampleMicroservice.port, stub);
});
