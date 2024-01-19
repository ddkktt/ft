// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
    // This will get the account to deploy the contract from Hardhat's environment
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract to deploy
    const FriendtechSharesV1 = await ethers.getContractFactory("FriendtechSharesV1");

    // Deploy the contract
    const friendtechShares = await FriendtechSharesV1.deploy();

    // Wait for the deployment to finish
    await friendtechShares.deployed();

    console.log("FriendtechSharesV1 deployed to:", friendtechShares.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
