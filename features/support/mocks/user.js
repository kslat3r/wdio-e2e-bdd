const MockBuilder = require('./builder');
const merge = require('deepmerge');
const template = require('../templates/user.json');

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
      .setResponseBody(merge(template, {
        id: parseInt(id, 10)
      }));
  }
}

module.exports = UserMockBuilder;
