const MockBuilder = require('../../../common/builder/mock');
const merge = require('deepmerge');
const data = require(`../../data/${process.env.TARGET_ENV}/response/user.json`);

class UserMockBuilder extends MockBuilder {
  constructor (id) {
    super();

    this.setMethod('GET')
      .setPath(`/node-example-enterprise-service/v1.0/users/${id}`)
      .setHeaders({
        'x-lbg-channel': 'RC',
        'x-lbg-brand': 'LYDS',
        'x-lbg-txn-correlation-id': '12345'
      })
      .setStatusCode(200)
      .setResponseBody(merge(data, {
        id: parseInt(id, 10)
      }));

    return this;
  }
}

module.exports = UserMockBuilder;
