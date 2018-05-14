module.exports = {
  find (obj) {
    return this.driver.find(obj);
  },

  findById (id) {
    return this.driver.findElement({ id });
  },

  findByClassName (className) {
    return this.driver.findElement({ className });
  },

  findByTagName (tagName) {
    return this.driver.findElement({ tagName });
  },

  findByName (name) {
    return this.driver.findElement({ name });
  },

  findByLinkText (linkText) {
    return this.driver.findElement({ linkText });
  },

  findByPartialLinkText (partialLinkText) {
    return this.driver.findElement({ partialLinkText });
  },

  findByCss (css) {
    return this.driver.findElement({ css });
  },

  findByXPath (xpath) {
    return this.driver.findElement({ xpath });
  },

  findManyByClassName (className) {
    return this.driver.findElements({ className });
  },

  findManyByTagName (tagName) {
    return this.driver.findElements({ tagName });
  },

  findManyByLinkText (linkText) {
    return this.driver.findElements({ linkText });
  },

  findManyByPartialLinkText (partialLinkText) {
    return this.driver.findElements({ partialLinkText });
  },

  findManyByCss (css) {
    return this.driver.findElements({ css });
  }
};
