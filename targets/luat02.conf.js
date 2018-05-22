const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');
const { mockServerClient } = require('mockserver-client');

exports.config = merge(wdioConf.config, {
  mocks: {
    nodeExampleMicroservice: mockServerClient('luat02-es-ob.digital.service.group/ob-core-node-example-api-mock', 31011)
  },

  gateway: {
    LYDS: 'https://luat02-authorise-api.lloydsbank.co.uk/luat02/lbg/lyds',
    HFX: 'https://luat02-authorise-api.halifax-online.co.uk/luat02/lbg/hfx',
    BOS: 'https://luat02-authorise-api.bankofscotland.co.uk/luat02/lbg/bos'
  },

  urls: {
    nodeExampleMicroservice: 'https://luat02-es-ob.digital.service.group:31011/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'https://luat02-es-ob.digital.service.group:31011/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
