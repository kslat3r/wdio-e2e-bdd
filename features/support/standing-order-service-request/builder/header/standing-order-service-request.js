const defaultHeaders = require(`../../data/${process.env.TARGET_ENV}/header/default.json`);
const merge = require('deepmerge');
const GatewayBuilder = require('../../../common/builder/gateway');

class NodeExampleMicroserviceHeaderBuilder extends GatewayBuilder {
  constructor () {
    super(merge({}, defaultHeaders));
  }
}

module.exports = NodeExampleMicroserviceHeaderBuilder;
