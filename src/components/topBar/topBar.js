import styled from "styled-components";
import Logo from "../logo/logo";
import tw from 'tailwind-styled-components';

const Background = styled.section`
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(20px);
    border-radius: 25px;
    vertical-align: middle;
    display: flex;
    padding: 2%;
    column-gap: 30px;
    align-items: flex-start;
`

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

export default function TopBar() {
    return(
        <Background>
            <Logo/>
            <Button className="ml-10">
                Home
            </Button>
            <Button>
                Learn
            </Button>
            <Button>
                About
            </Button>
            <Button className="ml-10">
                Connect with MetaMask
            </Button>
        </Background>
    );
}