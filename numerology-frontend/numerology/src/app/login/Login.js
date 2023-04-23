import React, { createRef } from 'react';
import axios from 'axios';

class Login extends React.Component {

  usernameRef = createRef();
  passwordRef = createRef();

  handleSubmit(e) {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    console.log("username: " + username + "   password: " + password)
    
    axios({
        headers: {
          'Content-Type':'application/json'
        },
        method: 'POST',
        url: '/delegator/login',
        data: {
          username: username,
          password: password
        }
      }).then(response => {
        alert(response.data.code + " : " + response.data.msg);
      });
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form>
          <input ref={this.usernameRef} type='text' placeholder='username'/>
          <input ref={this.passwordRef} type='password' placeholder='password'/>
          <input onClick={this.handleSubmit.bind(this)} type='button' value='submit'/>
        </form>
      </div>
    );
  }

}

export default Login;