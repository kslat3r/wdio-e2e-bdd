const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
  mocks: {
    nodeExampleMicroservice: {
      host: 'luat01-es-ob.digital.service.group/ob-core-node-example-api-mock',
      port: 31011
    }
  },

  urls: {
    nodeExampleMicroservice: 'https://luat01-es-ob.digital.service.group:31011/node-example-microservice/v1.0'
  }
});
