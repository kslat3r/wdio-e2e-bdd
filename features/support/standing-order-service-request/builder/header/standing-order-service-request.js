const defaultHeaders = require(`../../data/${process.env.TARGET_ENV}/header/default.json`);
const GatewayHeaderBuilder = require('../../../common/builder/gateway-header');

class NodeExampleMicroserviceHeaderBuilder extends GatewayHeaderBuilder {
  constructor () {
    super(defaultHeaders);
  }
}

module.exports = NodeExampleMicroserviceHeaderBuilder;
