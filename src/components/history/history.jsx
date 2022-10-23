import styled from "styled-components";
import tw from "tailwind-styled-components";
import TopBar from '../topBar/topBar';

const TitleText = styled.text`
  font-size: 3em;
  text-align: center;
  color: blue;
  text-transform: uppercase;
  font-family: SpaceMonoRegular;
  font-weight: 400;
  opacity: 85%;
`;

const SubText = styled.text`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-family: SpaceMonoRegular;
  font-weight: 300;
  opacity: 75%;
`;

const B = styled.div`
background: linear-gradient(135deg,hsla(0,0%,100%,0) 56%,#ffcaba 98%),linear-gradient(25deg,#f5d1ff 23%,#fff 60%);
background-repeat: repeat, repeat;
background-attachment: scroll, scroll;
background-image: linear-gradient(135deg, rgba(255, 255, 255, 0) 56%, rgb(255, 202, 186) 98%), linear-gradient(25deg, rgb(245, 209, 255) 23%, rgb(255, 255, 255) 60%);
`

const Background = tw(B)`
    min-h-screen
    px-48
`

const Card = tw.div`
    flex
    flex-col
    items-start
`

const Container = styled.div`
background-color: rgba(53, 184, 232, 0.25);
backdrop-filter: blur(20px);
border-radius: 25px;
display: flex;
flex-direction: column;
align-items: start;
padding: 2%;
margin-bottom:10px;
`

const TopBarWrapper = styled.div`
    background-color: #396afc; 
    backdrop-filter: blur(20px);
    padding: 2%;`

export default function History() {
  return (
    <>
    <TopBarWrapper>
        <TopBar/>
    </TopBarWrapper>
  <Background>
    <TitleText>Patient's History</TitleText>
    <Card>
        <SubText>Stoyan Dimitrov</SubText>
        <SubText>30/11/1999</SubText>
        <SubText>Male</SubText>
    </Card>
    <hr></hr>
    <div class="mt-10">
    <Container>
        <SubText>First Visit</SubText>
        <SubText>Doctor's Name</SubText>
        <p>Dr. Bugz B.</p>
    </Container>
    <Container>
        <SubText>Main Complaint / Injury / Illness</SubText>
    </Container>
    <Container>
        <SubText>Medical History</SubText>
    </Container>
    <Container>
        <SubText>Family History</SubText>
    </Container>
    <Container>
        <SubText>Physical Exam</SubText>
    </Container>
    <Container>
        <SubText>Allergies</SubText>
    </Container>
    <Container>
        <SubText>Medication / Prescriptooms</SubText>
    </Container>
    </div>
  </Background>
  </>
  );
}
