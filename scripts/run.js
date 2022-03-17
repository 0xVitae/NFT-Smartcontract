const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    // This will actually compile our contract and generate the necessary files we need to work with our contract under the artifacts directory.
    const nftContract = await nftContractFactory.deploy();
    //Hardhat will create a local Ethereum network. Then, after the script completes it'll destroy that local network.
    await nftContract.deployed();
    // wait until contract is officially (fake) mined and deployed to our local blockchain!
    console.log("Contract deployed to:", nftContract.address);

    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()

    // Mint another NFT for fun.
    txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();