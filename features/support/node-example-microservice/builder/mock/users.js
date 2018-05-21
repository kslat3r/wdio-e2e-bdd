const MockBuilder = require('../../../common/builder/mock');
const merge = require('deepmerge');
const template = require('../../template/response/user.json');

class UsersMockBuilder extends MockBuilder {
  constructor (ids) {
    super();

    const responseBody = ids.map(id => merge(template, {
      id: parseInt(id, 10)
    }));

    this.setMethod('GET')
      .setPath(`/node-example-enterprise-service/v1.0/users`)
      .setHeaders({
        'x-lbg-channel': 'RC',
        'x-lbg-brand': 'LYDS',
        'x-lbg-txn-correlation-id': '12345'
      })
      .setStatusCode(200)
      .setResponseBody(responseBody);

    return this;
  }
}

module.exports = UsersMockBuilder;
