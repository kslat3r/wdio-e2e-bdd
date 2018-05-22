const ResponseBuilder = require('./response');
const merge = require('deepmerge');
const data = require(`../data/${process.env.TARGET_ENV}/response/error.json`);

class ErrorBuilder extends ResponseBuilder {
  constructor (statusCode, errorCode, message) {
    super(merge(data, {
      error: {
        statusCode: parseInt(statusCode, 10),
        code: errorCode,
        message
      }
    }));

    return this;
  }
}

module.exports = ErrorBuilder;
