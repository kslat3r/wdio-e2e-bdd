const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');
const { mockServerClient } = require('mockserver-client');

exports.config = merge(wdioConf.config, {
  mocks: {
    nodeExampleMicroservice: mockServerClient('ob-core-node-example-api-mock-orange.lbg.eu-gb.mybluemix.net', 80)
  },

  urls: {
    nodeExampleMicroservice: 'http://j2-ob-core-node-example-microservice-orange.lbg.eu-gb.mybluemix.net/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'http://j2-ob-pisp-sosr-channel-api-orange.lbg.eu-gb.mybluemix.net/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
