module.exports = {
  titleSuffix: '- Google Search',

  go: (browser) => {
    browser.url('http://www.google.com');
  },

  search: (browser, term) => {
    browser.element('.gsfi')
      .setValue(term)
      .click('input[name="btnK"]');
  }
};
