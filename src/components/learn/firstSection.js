import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const Text = styled.text`
    font-size: 3.5em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: white;
    font-family: SpaceMonoRegular;
    font-weight: 700;
    opacity: 80%;
`

export default function FirstSection() {
    return(
        <Text>//Market Research.</Text>
    );
}