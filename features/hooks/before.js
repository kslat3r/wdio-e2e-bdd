const { Before } = require('cucumber');
const webdriver = require('selenium-webdriver');
require('selenium-webdriver/chrome');

Before(function (opts) {
  const tags = opts.pickle.tags.map(tag => tag.name);

  if (tags.includes('@ui')) {
    this.driver = new webdriver
      .Builder()
      .forBrowser('chrome')
      .build();
  }
});
