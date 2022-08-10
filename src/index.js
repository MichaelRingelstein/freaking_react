import React from 'react';
import ReactDOM from 'react-dom/client';
//import './styles/index.css';
import '/Users/michaelringelstein/Documents/Perso/Code/freaking_react/src/styles/tailwind.generated.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMission from './Pages/CreateMission';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="create-mission" element={<CreateMission />}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
