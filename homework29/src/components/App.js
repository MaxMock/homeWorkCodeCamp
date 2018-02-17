import React, { Component } from "react";
import '../App.css'
import Header from './Header'
import Main from './Main'
import { Layout, Menu, Icon } from 'antd';
const {  Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
 
        <Header />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <Main />   
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Todo React
        </Footer>
      </Layout>
    </Layout>


      </div>
    );
  }
}

export default App;
