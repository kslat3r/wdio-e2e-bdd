module.exports = {
  timeout: 60 * 1000,

  mock: {
    nodeExampleMicroservice: {
      host: process.env.MOCK_SERVER_HOST || 'ob-core-node-example-api-mock.lbg.eu-gb.mybluemix.net',
      port: process.env.MOCK_SERVER_PORT || 80
    }
  },

  urls: {
    nodeExampleMicroservice: 'http://j2-ob-core-node-example-microservice-master.lbg.eu-gb.mybluemix.net/node-example-microservice/v1.0'
  }
};
