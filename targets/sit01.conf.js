const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
  urls: {
    nodeExampleMicroservice: 'https://sit01-es-ob.digital.service.group:31011/node-example-microservice/v1.0'
  }
});
