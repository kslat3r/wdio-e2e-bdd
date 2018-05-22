const target = require(`../../../targets/${process.env.TARGET_ENV}.conf.js`);

module.exports = (brand) => {
  return target.config.gateway[brand] || undefined;
};
