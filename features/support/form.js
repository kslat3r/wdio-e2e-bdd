module.exports = {
  inputText (text, elem) {
    return elem.sendKeys(text);
  },

  selectOptionByValueWithinElem (value, elem) {
    return elem.click()
      .then(() => {
        return elem.findElement({
          css: `option[value="${value}"]`
        });
      })
      .then((option) => {
        return option.click();
      });
  },

  submit (elem) {
    return elem.submit();
  }
};
