const ResponseBuilder = require('./builder');
const merge = require('deepmerge');
const errorTemplate = require('../../template/response/error.json');

class ErrorResponseBuilder extends ResponseBuilder {
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

module.exports = ErrorResponseBuilder;
