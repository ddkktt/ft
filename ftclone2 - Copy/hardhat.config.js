require('@nomiclabs/hardhat-ethers')

const API_URL = "https://base-goerli.g.alchemy.com/v2/b9m0QbpgVsV5Wwl3G7bAkSA7l5OpLK-x";
const PRIVATE_KEY = "3a0c5ab475f8354c9a42587564905cf640cf9d0a95c5c5c35be93441bbc68c21"
const PUBLIC_KEY = "0xFb6D6B739eF087B8F196f02D034E6B007A1Ed011";
let pk = 'f77f0dd605958b736efa5a1b1616a012f1ac35299c172d6aeb9b5130c957b30d'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    base :{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
    ,blast :{
      url: 'https://testnet.blast.io',
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};