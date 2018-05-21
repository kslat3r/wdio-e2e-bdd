const defaultHeaders = require('../../template/header/default.json');
const HeaderBuilder = require('../../../common/builder/header');

class NodeExampleMicroserviceHeaderBuilder extends HeaderBuilder {
  constructor () {
    super(defaultHeaders);
  }
}

module.exports = NodeExampleMicroserviceHeaderBuilder;
