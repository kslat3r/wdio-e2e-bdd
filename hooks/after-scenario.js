module.exports = function (scenario) {
  const mocks = Object.keys(this.mocks);
  const promises = [];

  mocks.forEach((mock) => {
    promises.push(this.mocks[mock].reset());
  });

  return Promise.all(promises);
};
