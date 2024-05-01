const TizaraCoin = artifacts.require("TizaraCoin");
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer,  accounts) {
  const initialOwner = accounts[0];
  
  console.log("Starting deployment of TizaraCoin...");

  console.log("Deploying proxy contract...");
  const proxy = await deployProxy(TizaraCoin, [initialOwner], { deployer, initializer: 'initialize' });

  console.log("Proxy contract deployed at address:", proxy.address);
  console.log("TizaraCoin deployment completed!");
};
