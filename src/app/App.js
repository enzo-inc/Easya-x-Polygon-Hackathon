import './App.css';
import Title from '../components/title/title';
import TopBar from '../components/topBar/topBar';
import About from '../components/about/about.js';
import styled from 'styled-components';

const ViewWrapper = styled.section`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
  text-align: center;
`

function App() {
  return (
    <ViewWrapper>
      <TopBar />
      <Title />
      <About />
    </ViewWrapper>
  );
}

export default App;