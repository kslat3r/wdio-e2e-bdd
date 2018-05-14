const { Given } = require('cucumber');
const stub = require('../support/stub');

Given(/^I create the stub (.*) on node-example-microservice-mock$/, function (file) {
  const data = require(`${__dirname}/../../stubs/${file}.json`);

  return stub.create(this.config.mock.nodeExampleMicroservice.host, this.config.mock.nodeExampleMicroservice.port, data);
});
