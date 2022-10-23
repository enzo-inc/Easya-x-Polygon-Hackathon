// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT


                                                                                                                           
                                                                                                                           
DDDDDDDDDDDDD             OOOOOOOOO             CCCCCCCCCCCCCTTTTTTTTTTTTTTTTTTTTTTT     OOOOOOOOO     RRRRRRRRRRRRRRRRR   
D::::::::::::DDD        OO:::::::::OO        CCC::::::::::::CT:::::::::::::::::::::T   OO:::::::::OO   R::::::::::::::::R  
D:::::::::::::::DD    OO:::::::::::::OO    CC:::::::::::::::CT:::::::::::::::::::::T OO:::::::::::::OO R::::::RRRRRR:::::R 
DDD:::::DDDDD:::::D  O:::::::OOO:::::::O  C:::::CCCCCCCC::::CT:::::TT:::::::TT:::::TO:::::::OOO:::::::ORR:::::R     R:::::R
  D:::::D    D:::::D O::::::O   O::::::O C:::::C       CCCCCCTTTTTT  T:::::T  TTTTTTO::::::O   O::::::O  R::::R     R:::::R
  D:::::D     D:::::DO:::::O     O:::::OC:::::C                      T:::::T        O:::::O     O:::::O  R::::R     R:::::R
  D:::::D     D:::::DO:::::O     O:::::OC:::::C                      T:::::T        O:::::O     O:::::O  R::::RRRRRR:::::R 
  D:::::D     D:::::DO:::::O     O:::::OC:::::C                      T:::::T        O:::::O     O:::::O  R:::::::::::::RR  
  D:::::D     D:::::DO:::::O     O:::::OC:::::C                      T:::::T        O:::::O     O:::::O  R::::RRRRRR:::::R 
  D:::::D     D:::::DO:::::O     O:::::OC:::::C                      T:::::T        O:::::O     O:::::O  R::::R     R:::::R
  D:::::D     D:::::DO:::::O     O:::::OC:::::C                      T:::::T        O:::::O     O:::::O  R::::R     R:::::R
  D:::::D    D:::::D O::::::O   O::::::O C:::::C       CCCCCC        T:::::T        O::::::O   O::::::O  R::::R     R:::::R
DDD:::::DDDDD:::::D  O:::::::OOO:::::::O  C:::::CCCCCCCC::::C      TT:::::::TT      O:::::::OOO:::::::ORR:::::R     R:::::R
D:::::::::::::::DD    OO:::::::::::::OO    CC:::::::::::::::C      T:::::::::T       OO:::::::::::::OO R::::::R     R:::::R
D::::::::::::DDD        OO:::::::::OO        CCC::::::::::::C      T:::::::::T         OO:::::::::OO   R::::::R     R:::::R
DDDDDDDDDDDDD             OOOOOOOOO             CCCCCCCCCCCCC      TTTTTTTTTTT           OOOOOOOOO     RRRRRRRR     RRRRRRR
                                                                                                                           
                                                                                                                           
                                                                                                                           
                                                                                                                           
                                                                                                                           
                                                                                                                           
                                                                                                                           
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