const { expect } = require('chai');

class ResponseBuilder {
  constructor (data) {
    this.data = data;

    return this;
  }

  compareTo (data) {
    expect(this.data).to.deep.equal(data);
  }
}

module.exports = ResponseBuilder;
