require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/aPMKWdxtwuZDmKWI9TQeo8V29yTo2yxw',
      accounts: [ '79cd7c909cf8078ccf373cb6c5f79086e1d9664d2d7783bade4361a369514576' ]
    }
  }
};
// 0x1cC98C08a6dAD5D859B72CF1F3B29Ce22A64E323