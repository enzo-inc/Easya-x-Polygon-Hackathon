import styled from "styled-components";
import Logo from "../logo/logo";
import tw from "tailwind-styled-components";
import MetamaskLogo from "../../res/images/metamask.svg";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
import Web3 from "web3";
import { Network, Alchemy } from "alchemy-sdk";
import { POSClient, use } from "@maticnetwork/maticjs";
import { Web3ClientPlugin } from "@maticnetwork/maticjs-web3";
import React, { useEffect, useState } from "react";
import { DOCTOR_NFT_ABI, DOCTOR_NFT_ADDRESS } from "../../config";
import { ethers } from "ethers";

use(Web3ClientPlugin);
const posClient = new POSClient();

const Background = styled.section`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  display: flex;
  padding: 2%;
  column-gap: 30px;
  align-items: flex-start;
  margin-left: 10%;
  margin-right: 10%;
  top: 50px;
`;

const Button = tw.button`
    text-white
    hover:bg-gray-900 
    focus:outline-none
    font-medium 
    rounded-lg 
    text-sm 
    px-5 
    py-2.5 
    mr-2
    dark:hover:bg-gray-700
`;

const ButtonDark = tw(Button)`
    bg-gray-800
    dark:bg-gray-800
    rounded-full
`;

const Image = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.logo});
`;

export default function TopBar() {

  var [isConnected, setConnected] = useState(false);

  useEffect(() => {
    connectWallet();
  })

  async function connectWallet() {
    if (!window.ethereum) {
      return alert("Metamask not installed or not enabled");
    }

    let account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log(account)

    if (account) {
        setConnected(true)
    } 
  }

  return (
    <Background>
      <Logo />
      <Link to="/">
        <Button className="ml-10">Home</Button>
      </Link>
      <HLink to="/#learn">
        <Button>Learn</Button>
      </HLink>
      <Button>About</Button>
      <ButtonDark
        id="connect-button"
        className="flex items-center ml-10 absolute right-6"
        onClick={connectWallet}
      >
        <Image logo={MetamaskLogo}></Image>
        <span id="button-text" className="ml-3">
          {isConnected ? "Connected" : "Connect with Metamask"}
        </span>
      </ButtonDark>
    </Background>
  );
}
