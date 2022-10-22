import styled from 'styled-components';
import * as constants from '../../constants/title.js';

const WelcomeText = styled.text`
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: white;
  font-family: SpaceMonoRegular;
  font-weight: 100;
  opacity: 40%;
`

const TitleText = styled.text`
  font-size: 10em;
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-family: SpaceMonoRegular;
  font-weight: 600;
  opacity: 85%;
  background: linear-gradient(135deg,hsla(0,0%,100%,0) 56%,#ffcaba 98%),linear-gradient(25deg,#f5d1ff 23%,#fff 60%);
  background-color: rgba(0, 0, 0, 0);
  background-position-x: 0%, 0%;
  background-position-y: 0%, 0%;
  background-repeat: repeat, repeat;
  background-attachment: scroll, scroll;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0) 56%, rgb(255, 202, 186) 98%), linear-gradient(25deg, rgb(245, 209, 255) 23%, rgb(255, 255, 255) 60%);
  background-size: auto, auto;
  background-origin: padding-box, padding-box;
  background-clip: border-box, border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubTitleText = styled.text`
  font-size: 0.5em;
  text-align: center;
  color: white;
  font-family: SpaceMonoRegular;
  font-weight: 50;
  opacity: 100%;
  max-width: 30em;
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-normal-1);
  letter-spacing: var(--letter-spacing-normal-1);
`

const FlexWrapper = styled.section`
  width: 100%;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`

export default function Title() {
  return (
    <FlexWrapper>
      <WelcomeText>
        {constants.WELCOME_TEXT}
      </WelcomeText>
      <TitleText>/
        {constants.BRAND_TITLE}.
      </TitleText>
      <SubTitleText>
        {constants.SUB_TITLE}
      </SubTitleText>
    </FlexWrapper>
  );
}