import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const Text = styled.text`
    font-size: 3.5em;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: #396afc;  /* fallback for old browsers */
    color: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
    color: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: SpaceMonoRegular;
    font-weight: 700;
    opacity: 80%;
`

const SubText = styled.text`
    font-size: 0.5em;
    color: black;
    font-family: SpaceMonoRegular;
    font-weight: 50;
    opacity: 100%;
    max-width: 30em;
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-normal-1);
    letter-spacing: var(--letter-spacing-normal-1);
    display: flex;
    flex-direction: row;
    text-align: ${props => props.alignment ? "left" : "right"};
    ${props => props.alignment ? "margin-right: auto" : "margin-left: auto"};
`

const Wrapper = tw.div`
    ${props => props.alignment ? "text-left" : "text-right"};
    ml-10
    mr-10
    flex-row
`

export default function Section(props) {
    return(
        <Wrapper alignment={props.alignment}>
            <Text alignment={props.alignment}>{props.header}</Text>
            <SubText alignment={props.alignment}>{props.desc}</SubText>
        </Wrapper>
    );
}