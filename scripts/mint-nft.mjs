const CONTRACT_ADDRESS = "0xF966E3cecbbec9ACf46918983fF19deB8Db2d25f"
const META_DATA_URL = "ipfs://bafyreigpjbndjjxcej2phdvnkrpewzr6fdkhmw334dfugdjwtnqy2ciuxa/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const PatientNFT = await ethers.getContractFactory("PatientNFT")
   const [owner] = await ethers.getSigners()
   await PatientNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });