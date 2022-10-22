async function deployContract() {
    const DoctorNFT = await ethers.getContractFactory("DoctorNFT")
    const doctorNFT = await DoctorNFT.deploy()
    await doctorNFT.deployed()
    // This solves the bug in Mumbai network where the contract address is not the real one
    const txHash = patientNFT.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log("Contract deployed to address:", contractAddress)
   }
   
   deployContract()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });