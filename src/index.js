import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import Login from './login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
     <Route path="login" element={ <Login />} />
      <Route path="/" element={ <App />} />
     
    </Routes>
  </BrowserRouter>
);

