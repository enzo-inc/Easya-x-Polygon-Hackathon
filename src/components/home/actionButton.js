import * as constants from '../../constants/actionButton.js';
import tw from 'tailwind-styled-components';
import React from "react";

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
      <Button>{constants.GET_STARTED_D}</Button>
      <Button>{constants.GET_STARTED_P}</Button>
    </div>
  );
}