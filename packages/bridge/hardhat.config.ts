import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-web3'
import '@typechain/hardhat'

import { HardhatUserConfig } from 'hardhat/config'

const testDir = process.env.TESTS_DIR ?? 'test'

const config: HardhatUserConfig = {
  mocha: {
    timeout: 50000,
  },
  solidity: {
    version: '0.6.11',
    // note: we do not run optimizer
  },
  paths: {
    tests: testDir,
  },
}

export default config