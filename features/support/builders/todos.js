const Builder = require('./builder');
const merge = require('deepmerge');
const template = require('../templates/todo.json');

class TodosBuilder extends Builder {
  constructor () {
    super();

    super.setMethod('GET')
      .setPath(`/node-example-enterprise-service/v1.0/todos`)
      .setHeaders({
        'x-lbg-channel': 'RC',
        'x-lbg-brand': 'LYDS',
        'x-lbg-txn-correlation-id': '12345'
      })
      .setStatusCode(200)
      .setResponseBody([]);
  }

  setUserId (userId) {
    const responseBody = [];

    for (let i = 1; i < 4; i++) {
      responseBody.push(merge(template, {
        id: i,
        userId: parseInt(userId, 10)
      }));
    }

    super.setResponseBody(responseBody);

    return this;
  }
}

module.exports = TodosBuilder;
