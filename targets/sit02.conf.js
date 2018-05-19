const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
  urls: {
    nodeExampleMicroservice: 'https://sit02-es-ob.digital.service.group:31011/node-example-microservice/v1.0',
    standingOrderServiceRequestChannelApi: 'https://sit02-es-ob.digital.service.group:31011/ob-pisp-standing-order-service-requests-channel-api/v2.0'
  }
});
