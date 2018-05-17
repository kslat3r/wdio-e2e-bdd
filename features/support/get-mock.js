const target = require(`../../targets/${process.env.TARGET_ENV}.conf.js`);

module.exports = (name) => {
  return target.config.mocks[name] || undefined;
};
