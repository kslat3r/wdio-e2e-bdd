const MockBuilder = require('../../../common/builder/mock');
const merge = require('deepmerge');
const data = require(`../../data/${process.env.TARGET_ENV}/response/todo.json`);

class TodosMockBuilder extends MockBuilder {
  constructor () {
    super();

    this.setMethod('GET')
      .setPath(`/node-example-enterprise-service/v1.0/todos`)
      .setHeaders({
        'x-lbg-channel': 'RC',
        'x-lbg-brand': 'LYDS',
        'x-lbg-txn-correlation-id': '12345'
      })
      .setStatusCode(200)
      .setResponseBody([]);

    return this;
  }

  setUserId (userId) {
    const responseBody = [];

    for (let i = 1; i < 4; i++) {
      responseBody.push(merge(data, {
        id: i,
        userId: parseInt(userId, 10)
      }));
    }

    this.setResponseBody(responseBody);

    return this;
  }
}

module.exports = TodosMockBuilder;
