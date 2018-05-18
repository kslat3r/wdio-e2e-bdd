const ResponseBuilder = require('./builder');
const merge = require('deepmerge');
const errorTemplate = require('../templates/error.json');

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
  }
}

module.exports = ErrorResponseBuilder;
