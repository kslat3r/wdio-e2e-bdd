const getGateway = require('../get-gateway');
const tpp = require(`../data/${process.env.TARGET_ENV}/tpp/default.json`);
const HeaderBuilder = require('./header');
const request = require('request-promise');

class GatewayBuilder extends HeaderBuilder {
  async setAuthorizationBearerToken (brand = 'LYDS') {
    const gateway = getGateway(brand);

    if (!gateway) {
      return this;
    }

    const headers = {
      authorization: `Basic ${Buffer.from(`${tpp.clientId}:${tpp.clientSecret}`).toString('base64')}`
    };

    let response;

    try {
      response = await request({
        method: 'POST',
        uri: `${gateway}/oidc-api/v1.1/token?grant_type=client_credentials&scope=payments`,
        headers
      });
    } catch (e) {
      throw e;
    }

    if (!response.accessToken) {
      throw new Error('Access token not returned from authorization call');
    }

    this.set('authorization', `Bearer ${response.accessToken}`);

    return this;
  }
}

module.exports = GatewayBuilder;
