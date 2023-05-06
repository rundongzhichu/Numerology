import React, { createRef } from 'react';
import axios from 'axios';
import "./Login.css";

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
      <div className='Login'>
        <form>
          <h2>Welcome Login</h2>
          <input ref={this.usernameRef} type='text' placeholder='username'/>
          <input ref={this.passwordRef} type='password' placeholder='password'/>
          <button onClick={this.handleSubmit.bind(this)}>submit</button>
        </form>
      </div>
    );
  }

}

export default Login;