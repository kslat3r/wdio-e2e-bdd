const { mockServerClient } = require('mockserver-client');

module.exports = {
  create (host, port, stub) {
    const client = mockServerClient(host, port);

    const httpRequest = {
      method: stub.request.method,
      path: stub.request.path,
      body: stub.request.body
    };

    if (stub.request.headers) {
      httpRequest.headers = Object.keys(stub.request.headers).map((name) => ({
        name,
        values: [stub.request.headers[name]]
      }));
    }

    if (stub.request.query) {
      httpRequest.queryStringParameters = Object.keys(stub.request.query).map((name) => ({
        name,
        values: [stub.request.query[name]]
      }));
    }

    const httpResponse = {
      statusCode: stub.response.statusCode,
      body: typeof stub.response.body === 'object' ? JSON.stringify(stub.response.body) : stub.response.body
    };

    if (stub.response.headers) {
      httpResponse.headers = Object.keys(stub.response.headers).map((name) => ({
        name,
        values: [stub.response.headers[name]]
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
};
