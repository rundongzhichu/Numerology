/* eslint-disable react/prop-types */
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../login/Login';
import App from '../App';
import Home from '../home/Home';
import Test from '../test/test';

export default function AppRouter(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/test" element={<Test/>} />
      </Routes>
    </BrowserRouter>
  );
}