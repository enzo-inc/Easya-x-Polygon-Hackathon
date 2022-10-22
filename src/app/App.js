import './App.css';
import Title from '../components/title/title';
import TopBar from '../components/topBar/topBar';
import About from '../components/about/about';
import styled from 'styled-components';
import ActionButton from '../components/home/actionButton';
import AllSection from '../components/learn/allSection';
import tw from 'tailwind-styled-components';
import Footer from '../components/footer/footer';

const AppWrapper = styled.section`
  text-align: center;
`

const BackgroundWrapper = styled.div`
  background: #396afc;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const TopBarWrapper = styled(BackgroundWrapper)`
  padding: 2%;
`

const Wrapper = tw(BackgroundWrapper)`
  min-h-screen
`

function App() {
  return (
    <AppWrapper>
      <Wrapper>
        <TopBarWrapper>
          <TopBar />
        </TopBarWrapper>
      <Title />
      <ActionButton />
      </Wrapper>
      <AllSection />
      <About />
      <Footer />
    </AppWrapper>
  );
}

export default App;
