import * as constants from '../../constants/actionButton.js';
import tw from 'tailwind-styled-components';
import React from "react";
import { Outlet, Link } from 'react-router-dom';

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
`

export default function ActionButton() {
  return(
    <div>
      <Link to="/doctor_registration">
        <Button>{constants.GET_STARTED_D}</Button>
      </Link>
      <Link to="/patient_registration">
        <Button>{constants.GET_STARTED_P}</Button>
      </Link>
    </div>
  );
}