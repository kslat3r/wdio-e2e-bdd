const ResponseBuilder = require('./response');
const merge = require('deepmerge');
const errorTemplate = require('../template/response/error.json');

class ErrorBuilder extends ResponseBuilder {
  constructor (statusCode, errorCode, message) {
    super();

    this.data = merge(errorTemplate, {
      error: {
        statusCode: parseInt(statusCode, 10),
        code: errorCode,
        message
      }
    });

    return this;
  }
}

module.exports = ErrorBuilder;
