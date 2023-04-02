/* eslint-disable react/prop-types */
import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Login from '../login/Login';

export default function AppRouter(props) {
  const { path, component } = props;

  return (
    <Route path="/login" component={Login} />
  );
}