const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');
const { mockServerClient } = require('mockserver-client');

exports.config = merge(wdioConf.config, {
  mocks: {
    nodeExampleMicroservice: mockServerClient('luat01-es-ob.digital.service.group/ob-core-node-example-api-mock', 31011)
  },

  gateway: {
    LYDS: 'https://luat01-authorise-api.lloydsbank.co.uk/luat01/lbg/lyds',
    HFX: 'https://luat01-authorise-api.halifax-online.co.uk/luat01/lbg/hfx',
    BOS: 'https://luat01-authorise-api.bankofscotland.co.uk/luat01/lbg/bos'
  },

  urls: {
    nodeExampleMicroservice: 'https://luat01-es-ob.digital.service.group:31011/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'https://luat01-es-ob.digital.service.group:31011/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
