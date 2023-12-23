require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['2f39ad34296a9f8d6aaa29e4ef56be890f8359c400aa477c2c2e4cb2e44e0e0e3'],
    },
  },
};