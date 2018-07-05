
import React, { Component } from 'react';
import LoginLayout from 'components/LoginLayout';
import LoginForm from 'components/login/LoginForm';


// @reduxPage
// @connect()
class Login extends Component {

  render() {
    return (
      <LoginLayout className="layout-login">
        <LoginForm />
      </LoginLayout>
    );
  }
}

export default Login;
