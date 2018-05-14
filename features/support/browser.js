module.exports = {
  getUrl (url) {
    return this.driver.get(url);
  },

  getTitle () {
    return this.driver.getTitle();
  },

  switchToWindow (windowName) {
    return this.driver.switchTo().window(windowName);
  },

  switchToFrame (frameName) {
    return this.driver.switchTo().frame(frameName);
  },

  goBack () {
    return this.driver.back();
  },

  goForward () {
    return this.driver.forward();
  },

  setWindowSize (height, width) {
    return this.driver.manage().window().setSize(parseInt(height, 10), parseInt(width, 10));
  }
};
