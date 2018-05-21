class HeaderBuilder {
  constructor (data) {
    this.data = data;

    return this;
  }

  set (header, value) {
    this.data[header] = value;

    return this;
  }

  setAll (headers) {
    this.headers = headers;

    return this;
  }

  unset (header) {
    delete this.data[header];

    return this;
  }

  unsetAll () {
    this.data = {};
  }

  get (header) {
    return this.data[header];
  }

  getAll () {
    return this.data;
  }
}

module.exports = HeaderBuilder;
