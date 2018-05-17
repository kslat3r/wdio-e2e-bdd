const MockBuilder = require('./builder');
const merge = require('deepmerge');
const template = require('../templates/user.json');

class UsersMockBuilder extends MockBuilder {
  constructor (id) {
    super();

    super.setMethod('GET')
      .setPath(`/node-example-enterprise-service/v1.0/users`)
      .setHeaders({
        'x-lbg-channel': 'RC',
        'x-lbg-brand': 'LYDS',
        'x-lbg-txn-correlation-id': '12345'
      })
      .setStatusCode(200)
      .setResponseBody([
        merge(template, {
          id: parseInt(id, 10)
        })
      ]);
  }
}

module.exports = UsersMockBuilder;
