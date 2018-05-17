const { expect } = require('chai');

class ResponseBuilder {
  compareTo (data) {
    expect(this.data).to.deep.equal(data);
  }
}

module.exports = ResponseBuilder;
