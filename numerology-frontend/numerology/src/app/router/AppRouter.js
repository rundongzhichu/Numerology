/* eslint-disable react/prop-types */
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../login/Login';
import App from '../pageHome/App';

export default function AppRouter(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}