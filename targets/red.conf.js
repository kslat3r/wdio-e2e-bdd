const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');
const { mockServerClient } = require('mockserver-client');

exports.config = merge(wdioConf.config, {
  mocks: {
    nodeExampleMicroservice: mockServerClient('ob-core-node-example-api-mock-red.lbg.eu-gb.mybluemix.net', 80)
  },

  gateway: {
    LYDS: 'https://gatewaydata01.psd2.sandbox.extranet.group/cma-phase-2-red/lbg/lyds',
    HFX: 'https://gatewaydata01.psd2.sandbox.extranet.group/cma-phase-2-red/lbg/hfx',
    BOS: 'https://gatewaydata01.psd2.sandbox.extranet.group/cma-phase-2-red/lbg/bos'
  },

  urls: {
    nodeExampleMicroservice: 'http://j2-ob-core-node-example-microservice-red.lbg.eu-gb.mybluemix.net/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'http://j2-ob-pisp-sosr-channel-api-red.lbg.eu-gb.mybluemix.net/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
