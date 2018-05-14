module.exports = {
  timeout: 5 * 1000,

  mock: {
    nodeExampleMicroservice: {
      host: process.env.MOCK_SERVER_HOST || 'ob-core-node-example-api-mock.lbg.eu-gb.mybluemix.net',
      port: process.env.MOCK_SERVER_PORT || 80
    }
  },

  urls: {
    nodeExampleMicroservice: 'http://ob-node-example-microservice-master.lbg.eu-gb.mybluemix.net/node-example-microservice/v1.0'
  }
};
