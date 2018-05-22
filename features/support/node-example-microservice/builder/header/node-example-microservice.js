const defaultHeaders = require(`../../data/${process.env.TARGET_ENV}/header/default.json`);
const merge = require('deepmerge');
const HeaderBuilder = require('../../../common/builder/header');

class NodeExampleMicroserviceHeaderBuilder extends HeaderBuilder {
  constructor () {
    super(merge({}, defaultHeaders));
  }
}

module.exports = NodeExampleMicroserviceHeaderBuilder;
