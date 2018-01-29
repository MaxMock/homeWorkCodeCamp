import React, { Component } from 'react';
import logo from './logo.svg';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username : '',
      password : ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({username: event.target.value});
    console.log("ค่าที่พิมพ์มา" + event.target.value);
    console.log("ค่าใน State" + this.state.username);
  }

  render() {

    return (
        <div className="App">
            <h1>Welcome to my application</h1>
            <Card title="Sing In" style={{ width: 300, margin: 'auto' }}>
              <Form className="login-form">
                <Form.Item>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username" value={this.state.username}
                        onChange={this.handleChange}
                     />
                </Form.Item>
                <Form.Item>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Sign in
                    </Button>
                    <a className="login-form-forgot" href="">Forgot password</a>
                </Form.Item>
                <hr></hr>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Sign up
                    </Button>
                </Form.Item>
              </Form>
              Total is .....
            </Card>
        </div>
    );
  }
}

export default App;