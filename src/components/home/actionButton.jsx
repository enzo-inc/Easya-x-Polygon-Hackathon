import * as constants from "../../constants/actionButton";
import tw from "tailwind-styled-components";
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { DOCTOR_NFT_ABI, DOCTOR_NFT_ADDRESS, PATIENT_NFT_ADDRESS, PATIENT_NFT_ABI } from "../../config";
import { ethers } from "ethers";
import Web3 from "web3";

const Button = tw.button`
  text-white
  bg-gray-800
  hover:bg-gray-900 
  focus:outline-none 
  focus:ring-4
  font-medium 
  rounded-lg 
  text-sm 
  px-5 
  py-2.5 
  mr-2 
  dark:bg-gray-800
  dark:hover:bg-gray-700
`;

export default function ActionButton() {

  var [isDoctorConnected, setDoctorConnected] = useState(false);
  var [isPatientConnected, setPatientConnected] = useState(false);

  useEffect(() => {
    checkToken();
  })

  async function checkToken() {

    if (!window.ethereum) {
      return alert("Metamask not installed or not enabled");
    }

    let account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const from = window.ethereum.selectedAddress;
    const web3 = new Web3(window.ethereum);

    const doctorContract = new web3.eth.Contract(
      DOCTOR_NFT_ABI,
      DOCTOR_NFT_ADDRESS
    );

    const patientContract = new web3.eth.Contract(
      PATIENT_NFT_ABI,
      PATIENT_NFT_ADDRESS
    )

    const doctorTokenBalance = await doctorContract.methods.balanceOf(from).call();
    const patientTokenBalance = await patientContract.methods.balanceOf(from).call();

    doctorTokenBalance > 0 ? setDoctorConnected(true) : setDoctorConnected(false)
    patientTokenBalance > 0 ? setPatientConnected(true) : setPatientConnected(false)
  }

  return (
    <div>
      {(isDoctorConnected) ? <Button>Record Patient Data</Button>: null }
      {(isPatientConnected) ? <Button>View History</Button>: null }
      {(!isDoctorConnected && !isPatientConnected) ? <div><Button>{constants.GET_STARTED_P}</Button><Button>{constants.GET_STARTED_D}</Button></div>: null} 

        {/* {isDoctorConnected && !isPatientConnected ? <Button>Record Patient Data</Button> : <Button>{constants.GET_STARTED_P}</Button>}
      <Link to="/patient_registration">
        {!isDoctorConnected && isPatientConnected ? <Button>View History</Button> : <Button>{constants.GET_STARTED_D}</Button>}
      </Link> */}
    </div>
  );
}
