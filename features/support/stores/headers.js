let headers = {};

module.exports = {
  set: (header, value) => {
    headers[header] = value;
  },

  get: (header) => {
    return headers[header];
  },

  getAll: () => {
    return headers;
  },

  delete: (header) => {
    delete headers[header];
  },

  deleteAll: () => {
    headers = {};
  }
};
