import React, { Component }from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd/lib/grid';

// The FullRoster iterates over all of the players and creates
// a link to their profile page.

class Header extends Component {
  render() {
    return (
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
          <Row>
            <Col span={4} > <Icon type="bars" /></Col>
            <Col span={20} ><span className="nav-text"><NavLink to="/">Todo Mysql</NavLink></span></Col>
          </Row>
          </Menu.Item>
          <Menu.Item key="2">
          <Row>
          <Col span={4} > <Icon type="bars" /> </Col>
         <Col span={20} ><span className="nav-text"><NavLink to="/Home1">Todo MockApi</NavLink></span></Col>
         </Row>
          </Menu.Item>
          <Menu.Item key="3">
          <Row>
          <Col span={4} > <Icon type="bars" /></Col>
          <Col span={20} >   <span className="nav-text"><NavLink to="/Home2">Todo Firebase</NavLink></span></Col>
          </Row>
          </Menu.Item>

        </Menu> 
    );
  }
}

export default Header;
