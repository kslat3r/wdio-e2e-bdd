const headerStore = require('../features/support/common/store/header');
const responseStore = require('../features/support/common/store/response');

module.exports = function (scenario) {
  headerStore.deleteAll();
  responseStore.delete();

  // reset mocks

  const mocks = Object.keys(this.mocks);
  const promises = [];

  mocks.forEach((mock) => {
    promises.push(this.mocks[mock].reset());
  });

  return Promise.all(promises);
};
