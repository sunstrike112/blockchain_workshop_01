require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    bsctest: {
      url: process.env.URL,
      accounts: [process.env.PRIV_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};
