const target = require(`../../targets/${process.env.TARGET_ENV}.conf.js`);

module.exports = {
  get: (name) => {
    return target.config.urls[name] || undefined;
  }
};
