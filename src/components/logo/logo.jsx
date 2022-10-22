import logo from '../logo/logo.svg';
import styled from 'styled-components';

const Image = styled.div`
    width: 35px;
    height: 35px;
    background-image: url(${props => props.logo});
`

export default function Logo() {
  return (
    <Image logo={logo}/>
  );
}