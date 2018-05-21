class Builder {
  constructor (data) {
    this.data = data;

    return this;
  }

  get () {
    return this.data;
  }
}

module.exports = Builder;
