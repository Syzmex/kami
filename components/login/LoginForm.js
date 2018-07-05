
import React, { Component } from 'react';
import { Form, Button, Icon, Checkbox, Input, Row } from 'antd';


const FormItem = Form.Item;

// @reduxPage
// @connect()
@Form.create()
class LoginForm extends Component {

  handleLoginSubmit = ( e ) => {
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
      <Form layout="inline" onSubmit={this.handleLoginSubmit}>
        <Row>
          <FormItem className="login-form-input">
            {getFieldDecorator( 'userName', {
              rules: [{ required: true, message: '请填写用户名' }]
            })(
              <Input
                size="large"
                placeholder="Username"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />} />
            )}
          </FormItem>
          <FormItem className="login-form-input">
            {getFieldDecorator( 'password', {
              rules: [{ required: true, message: '请填写密码' }]
            })(
              <Input
                size="large"
                type="password"
                placeholder="Password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />} />
            )}
          </FormItem>
          <FormItem className="login-form-button">
            <Button size="large" type="primary" htmlType="submit">
              Log in
            </Button>
          </FormItem>
        </Row>
        <Row>
          <FormItem className="login-form-help">
            {getFieldDecorator( 'remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>
                <span className="login-form-text">Remember me</span>
              </Checkbox>
            )}
            <a className="login-form-forgot">
              <span className="login-form-text">Forgot password
              </span>
            </a>
          </FormItem>
        </Row>
      </Form>
    );
  }
}


export default LoginForm;
