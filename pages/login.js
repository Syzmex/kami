
import moment from 'moment';
import React, { Component } from 'react';
import { Form, Button, Icon, Checkbox, Input } from 'antd';
import LoginLayout from 'components/LoginLayout';


const FormItem = Form.Item;

// @reduxPage
// @connect()
@Form.create()
class Login extends Component {

  handleSubmit = ( e ) => {
    e.preventDefault();
    this.props.form.validateFields(( err, values ) => {
      if ( !err ) {
        console.log( 'Received values of form: ', values );
      }
    });
  }

  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <LoginLayout>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator( 'userName', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })( <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /> )}
          </FormItem>
          <FormItem>
            {getFieldDecorator( 'password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })( <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" /> )}
          </FormItem>
          <FormItem>
            {getFieldDecorator( 'remember', {
              valuePropName: 'checked',
              initialValue: true
            })( <Checkbox>Remember me</Checkbox> )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
        <style jsx global>{`
          .login-form {
            max-width: 300px;
          }
          .login-form-forgot {
            float: right;
          }
          .login-form-button {
            width: 100%;
          }
        `}
        </style>
      </LoginLayout>
    );
  }
}


export default Login;
