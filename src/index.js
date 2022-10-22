import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background: #396afc;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding-top: 1px;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundWrapper>
      <App />
    </BackgroundWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
