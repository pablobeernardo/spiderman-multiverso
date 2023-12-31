import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/style.css'
import reportWebVitals from './reportWebVitals';
import HomePage from './App';
import TobeyPage from './pages/tobey-page';
import TomPage from './pages/tom-page';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AndrewPage from './pages/andrew-page';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tobey-page" element={<TobeyPage />} />
      <Route path='/tom-page' element={<TomPage />} />
      <Route path='/andrew-page' element={<AndrewPage />} />
    </Routes>
  </HashRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
