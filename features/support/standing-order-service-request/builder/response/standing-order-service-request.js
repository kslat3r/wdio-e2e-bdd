const ResponseBuilder = require('../../../common/builder/response');
const merge = require('deepmerge');
const data = require(`../../data/${process.env.TARGET_ENV}/response/standing-order-service-request.json`);

class StandingOrderServiceRequestResponseBuilder extends ResponseBuilder {
  constructor (id, creationDateTime, statusUpdateDateTime) {
    super(merge({}, data, {
      Data: {
        StandingOrderServiceRequestId: id,
        CreationDateTime: creationDateTime,
        StatusUpdateDateTime: statusUpdateDateTime
      }
    }));
  }
}

module.exports = StandingOrderServiceRequestResponseBuilder;
