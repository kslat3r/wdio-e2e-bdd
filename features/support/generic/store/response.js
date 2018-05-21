let response = null;

module.exports = {
  set: (_response) => {
    response = _response;
  },

  get: () => {
    return response;
  },

  delete: () => {
    response = null;
  }
};
