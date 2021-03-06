const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
  gateway: {
    LYDS: 'https://sit02-authorise-api.lloydsbank.co.uk/sit02/lbg/lyds',
    HFX: 'https://sit02-authorise-api.halifax-online.co.uk/sit02/lbg/hfx',
    BOS: 'https://sit02-authorise-api.bankofscotland.co.uk/sit02/lbg/bos'
  },

  urls: {
    nodeExampleMicroservice: 'https://sit02-es-ob.digital.service.group:31011/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'https://sit02-es-ob.digital.service.group:31011/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
