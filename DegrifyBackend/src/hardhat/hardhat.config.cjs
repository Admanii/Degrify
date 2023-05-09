/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "TK01GJJBiBM2bRx-XjaP9Y8Ct04cWefs";
const ROPSTEN_PRIVATE_KEY =
  "b5d49ae55ecdbb4e76f37abb03ea47978c70676173143aae079f5d3895b94782";
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/TK01GJJBiBM2bRx-XjaP9Y8Ct04cWefs`,
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
  },
};
