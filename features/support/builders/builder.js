const { mockServerClient } = require('mockserver-client');

class Builder {
  setMethod (method) {
    this.method = method;

    return this;
  }

  setPath (path) {
    this.path = path;

    return this;
  }

  setBody (body) {
    this.body = body;

    return this;
  }

  setHeaders (headers) {
    this.headers = headers;

    return this;
  }

  setQuery (query) {
    this.query = query;

    return this;
  }

  setStatusCode (statusCode) {
    this.statusCode = statusCode;

    return this;
  }

  setResponseBody (responseBody) {
    this.responseBody = responseBody;

    return this;
  }

  setResponseHeaders (responseHeaders) {
    this.responseHeaders = responseHeaders;

    return this;
  }

  create (mock) {
    const client = mockServerClient(mock.host, mock.port);

    const httpRequest = {
      method: this.method,
      path: this.path,
      body: this.body
    };

    if (this.headers) {
      httpRequest.headers = Object.keys(this.headers).map((name) => ({
        name,
        values: [this.headers[name]]
      }));
    }

    if (this.query) {
      httpRequest.queryStringParameters = Object.keys(this.query).map((name) => ({
        name,
        values: [this.query[name]]
      }));
    }

    const httpResponse = {
      statusCode: this.statusCode,
      body: typeof this.responseBody === 'object' ? JSON.stringify(this.responseBody) : this.responseBody
    };

    if (this.responseHeaders) {
      httpResponse.headers = Object.keys(this.responseHeaders).map((name) => ({
        name,
        values: [this.responseHeaders[name]]
      }));
    }

    return client.mockAnyResponse({
      httpRequest,
      httpResponse,
      times: {
        unlimited: true
      }
    });
  }
}

module.exports = Builder;
