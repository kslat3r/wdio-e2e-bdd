const ResponseBuilder = require('./builder');
const merge = require('deepmerge');
const data = require('../../template/response/standing-order-service-request.json');

class StandingOrderServiceRequestResponseBuilder extends ResponseBuilder {
  constructor (id, creationDateTime, statusUpdateDateTime) {
    super();

    this.data = merge({}, data, {
      Data: {
        StandingOrderServiceRequestId: id,
        CreationDateTime: creationDateTime,
        StatusUpdateDateTime: statusUpdateDateTime
      }
    });
  }
}

module.exports = StandingOrderServiceRequestResponseBuilder;
