let headers = {};

module.exports = {
  set: (header, value) => {
    headers[header] = value;
  },

  setAll: (_headers) => {
    headers = _headers;
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
