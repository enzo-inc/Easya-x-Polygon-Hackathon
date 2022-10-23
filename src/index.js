import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './app/App.js';
import reportWebVitals from './reportWebVitals';
import DoctorRegistration from './pages/doctorRegistration';
import PatientRegistration from './pages/patientRegistration';
import FormRecord from './pages/formRecord';
import RegisterDoctor from './templates/registerDoctor';
import History from './components/history/history';


export default function PanaceaApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<App />} />
        <Route path="doctor_registration" element={<DoctorRegistration />} />
        <Route path="patient_registration" element={<PatientRegistration />} />
        <Route path="form_record" element={<FormRecord/>} />
        <Route path="history" element={<History />}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PanaceaApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();