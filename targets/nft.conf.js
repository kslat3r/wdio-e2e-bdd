const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');
const { mockServerClient } = require('mockserver-client');

exports.config = merge(wdioConf.config, {
  mocks: {
    nodeExampleMicroservice: mockServerClient('nft-es-ob.digital.service.group/ob-core-node-example-api-mock', 31011)
  },

  urls: {
    nodeExampleMicroservice: 'https://nft-es-ob.digital.service.group:31011/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'https://nft-es-ob.digital.service.group:31011/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
