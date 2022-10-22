import styled from "styled-components";
import Logo from "../logo/logo";
import tw from 'tailwind-styled-components';
import MetamaskLogo from '../../res/images/metamask.svg';

const Background = styled.section`
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(20px);
    border-radius: 25px;
    display: flex;
    padding: 2%;
    column-gap: 30px;
    align-items: flex-start;
    margin-left: 10%;
    margin-right: 10%;
    
    top: 50px;

`

const Button = tw.button`
    text-white
    hover:bg-gray-900 
    focus:outline-none 
    focus:ring-4
    font-medium 
    rounded-lg 
    text-sm 
    px-5 
    py-2.5 
    mr-2
    dark:hover:bg-gray-700
`

const ButtonDark = tw(Button)`
    bg-gray-800
    dark:bg-gray-800
`

const Image = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${props => props.logo});
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
            <ButtonDark className="flex items-center ml-10 absolute right-6">
                <Image logo={MetamaskLogo}></Image>
                <span className="ml-3">Connect with MetaMask</span>
            </ButtonDark>
        </Background>
    );
}