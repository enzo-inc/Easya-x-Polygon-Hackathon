// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DoctorNFT is ERC721URIStorage, Ownable {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;
   string _fName;
   string _lName;
   string _medicalNumber;

   constructor () ERC721("DoctorNFT", "DNFT") {}

   function mintNFT(address recipient, 
                    string memory fName,
                    string memory lName,
                    string memory medicalNumber,
                    string memory tokenURI)
       public
       returns (uint256)
   {
       _tokenIds.increment();
       uint256 newItemId = _tokenIds.current();
       _mint(recipient, newItemId);
       _setTokenURI(newItemId, tokenURI);
       _fName = fName;
       _lName = lName;
       _medicalNumber = medicalNumber;
       return newItemId;
   }
}