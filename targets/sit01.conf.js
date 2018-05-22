const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
  gateway: {
    LYDS: 'https://sit01-authorise-api.lloydsbank.co.uk/sit01/lbg/lyds',
    HFX: 'https://sit01-authorise-api.halifax-online.co.uk/sit01/lbg/hfx',
    BOS: 'https://sit01-authorise-api.bankofscotland.co.uk/sit01/lbg/bos'
  },

  urls: {
    nodeExampleMicroservice: 'https://sit01-es-ob.digital.service.group:31011/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'https://sit01-es-ob.digital.service.group:31011/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
