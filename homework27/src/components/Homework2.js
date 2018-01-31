import React, { Component } from 'react';

import { Layout, Form, Input, Icon, Row, Col, Button, Card, List,Avatar} from 'antd';

export class Homework2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText : '',
      listItem:[],
      status:true
    }
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  deleteListAtIndex = (index) => {
    const result = this.state.listItem;
    result.splice(index, 1);
    this.setState({listItem: result});
  }

  submitList = () => {
    if(this.state.status){
      this.setState({
        listItem: this.state.listItem.concat([{ 
          value: this.state.inputText,
          name:"max",
          side:"floatleft"
        }]
        ),
        inputText: '',
        status:false
      })
    }else
    {
      this.setState({
        listItem: this.state.listItem.concat([{ 
          value: this.state.inputText,
          name:"test",
          side:"floatrigth"
        }]
        ),
        inputText: '',
        status:true
      })
    }


  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  render() {

    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;
    

    return (
 
        <Card style={{ width: 500 , backgroundColor : this.props.myColor }}>
            <h1>Chat</h1>

            <div style={{ marginBottom:'10px'}}>
              <Input
                addonAfter={<Button type="primary" onClick={this.submitList}>Send</Button>}
                onChange={this.handleChangeText}
                value={this.state.inputText}
                onKeyPress={this.handleKeyPress}/>
            </div>

            <List
            bordered
            dataSource={this.state.listItem}
            renderItem={(item,index) => (
            <List.Item className={item.side} >
              <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description= {item.value}
              />
              </List.Item>
            )}
            />

        </Card>
      );
    }
}