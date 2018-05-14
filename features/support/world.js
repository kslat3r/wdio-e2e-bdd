const { setDefaultTimeout, setWorldConstructor } = require('cucumber');
const config = require('../../config');

const world = function ({ attach, parameters }) {
  this.attach = attach;
  this.parameters = parameters;
  this.config = config;

  setDefaultTimeout(config.timeout || 5000);
};

setWorldConstructor(world);
