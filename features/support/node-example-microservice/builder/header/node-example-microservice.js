const defaultHeaders = require(`../../data/${process.env.TARGET_ENV}/header/default.json`);
const HeaderBuilder = require('../../../common/builder/header');

class NodeExampleMicroserviceHeaderBuilder extends HeaderBuilder {
  constructor () {
    super(defaultHeaders);
  }
}

module.exports = NodeExampleMicroserviceHeaderBuilder;
