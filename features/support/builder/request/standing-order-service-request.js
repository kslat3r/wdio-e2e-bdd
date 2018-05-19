const merge = require('deepmerge');
const data = require('../../template/request/standing-order-service-request.json');
const Builder = require('./builder');

class StandingOrderServiceRequestBuilder extends Builder {
  constructor () {
    super(merge({}, data));

    return this;
  }

  setFirstPaymentDateTime (dateTime) {
    this.data.Data.StandingOrder.FirstPaymentDateTime = dateTime;

    return this;
  }

  setFirstPaymentAmount (amount) {
    this.data.Data.StandingOrder.FirstPaymentAmount.Amount = amount;

    return this;
  }

  setNextPaymentDateTime (dateTime) {
    this.data.Data.StandingOrder.NextPaymentDateTime = dateTime;

    return this;
  }

  setNextPaymentAmount (amount) {
    this.data.Data.StandingOrder.NextPaymentAmount.Amount = amount;

    return this;
  }

  setFinalPaymentDateTime (dateTime) {
    this.data.Data.StandingOrder.FinalPaymentDateTime = dateTime;

    return this;
  }

  setFinalPaymentAmount (amount) {
    this.data.Data.StandingOrder.FinalPaymentAmount.Amount = amount;

    return this;
  }
}

module.exports = StandingOrderServiceRequestBuilder;
