const headersStore = require('../features/support/stores/headers');
const responseStore = require('../features/support/stores/response');

module.exports = function (scenario) {
  headersStore.deleteAll();
  responseStore.delete();

  // reset mocks

  const mocks = Object.keys(this.mocks);
  const promises = [];

  mocks.forEach((mock) => {
    promises.push(this.mocks[mock].reset());
  });

  return Promise.all(promises);
};
