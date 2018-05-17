const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
  mocks: {
    nodeExampleMicroservice: {
      host: 'ob-core-node-example-api-mock-orange.lbg.eu-gb.mybluemix.net',
      port: 80
    }
  },

  urls: {
    nodeExampleMicroservice: 'http://j2-ob-core-node-example-microservice-orange.lbg.eu-gb.mybluemix.net/node-example-microservice/v1.0'
  }
});
