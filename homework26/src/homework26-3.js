import React, { Component } from 'react';
import {Form,Button,Icon,Input,Card,Layout,Breadcrumb, Row, Col} from 'antd';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;

class App extends Component {

  render() {
    
    return (

        <div>
          <Layout>

          <Content >
    <Row style={{ textAlign:'center',height:"700px"}} >
      <Col style={{backgroundColor:'rgb(29, 161, 242)',color: 'white',fontSize:'26px',paddingTop:"10px",height:"100%"}} span={12} >
      <Row >

        <div  style={{marginTop:'10%',marginBottom:'10%' }} >
          <span class="Icon Icon--search"></span><Icon type="search" /> ติดตามสิ่งที่คุณสนใจ
        </div>
        <div  style={{marginTop:'10%'}} >
          <span class="Icon Icon--people"></span><Icon type="team" /> ฟังสิ่งที่ผู้คนกำลังพูดถึง
        </div>
        <div  style={{marginTop:'10%',marginBottom:'10%'}} >
          <span class="Icon Icon--reply"></span><Icon type="message" /> เข้าร่วมบทสนทนา
        </div>

      </Row>
      </Col>
      
      <Col style={{paddingTop:"10px",height:"100%"}} span={12} >
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
            <Input style={{ color: 'rgba(0,0,0,.25)' }}  placeholder="Username" />
        </FormItem>
        <FormItem>
            <Input  style={{ color: 'rgba(0,0,0,.25)' }} type="password" placeholder="Password" />
            <a href="" style={{ color: 'rgba(0,0,0,.25)' }}>ลืมรหัสผ่าน?</a>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit">
            Log in
          </Button>
        </FormItem>
      </Form>
      <Form className="login-form" style={{ width:"450px" ,textAlign:"left", margin: 'auto' }}>
      <Row>
        <Col span={12} style={{textAlign:"left"}} >
        <img width={50} alt="logo" src="https://upload.wikimedia.org/wikipedia/th/thumb/6/62/Twitter_bird_logo_2012.png/150px-Twitter_bird_logo_2012.png" />
        </Col>
        <Col span={12} style={{textAlign:"right"}}>
        </Col>
        </Row>
        <h1 class="StaticLoggedOutHomePage-signupTitle">ดูสิ่งที่เกิดขึ้นบนโลกในขณะนี้</h1>
        <h2 class="StaticLoggedOutHomePage-signupSubtitle">เข้าร่วมทวิตเตอร์วันนี้</h2>
        <Form.Item>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={12} style={{textAlign:"left"}} >
                <Button type="primary" htmlType="submit">Sign in</Button>
                </Col>
                <Col span={12} style={{textAlign:"right"}} >มีบัญชีผู้ใช้อยู่แล้ว? <a href="/login">เข้าสู่ระบบ</a>
                </Col>
                </Row>
                </Form.Item>
                </Form>
                </Col>
                </Row>
                </Content>
                <Footer  >
                <ul className="StreamsFooter-list u-cf " style={{fontSize:"12px"}}>
                <li className="StreamsFooter-item"><a href="/about" rel="noopener">เกี่ยวกับ</a></li>
                <li className="StreamsFooter-item"><a href="//support.twitter.com" rel="noopener">ศูนย์ช่วยเหลือ</a></li>
                <li className="StreamsFooter-item"><a href="https://blog.twitter.com" rel="noopener">บล็อก</a></li>
                <li className="StreamsFooter-item"><a href="http://status.twitter.com" rel="noopener">สถานะ</a></li>
                <li className="StreamsFooter-item"><a href="https://about.twitter.com/careers" rel="noopener">ตําแหน่งงาน</a></li>
                <li className="StreamsFooter-item"><a href="/tos" rel="noopener">ข้อตกลง</a></li>
                <li className="StreamsFooter-item"><a href="/privacy" rel="noopener">นโยบายเกี่ยวกับความเป็นส่วนตัว</a></li>
                <li className="StreamsFooter-item"><a href="//support.twitter.com/articles/20170514" rel="noopener">คุกกี้</a></li>
                <li className="StreamsFooter-item"><a href="//support.twitter.com/articles/20170451" rel="noopener">ข้อมูลโฆษณา</a></li>
                <li className="StreamsFooter-item"><a href="//about.twitter.com/press/brand-assets" rel="noopener">ยี่ห้อ</a></li>
                <li className="StreamsFooter-item"><a href="https://about.twitter.com/products" rel="noopener">แอพ</a></li>
                <li className="StreamsFooter-item"><a href="//ads.twitter.com/?ref=gl-tw-tw-twitter-advertise" rel="noopener">ลงโฆษณา</a></li>
                <li className="StreamsFooter-item"><a href="https://marketing.twitter.com" rel="noopener">การตลาด</a></li>
                <li className="StreamsFooter-item"><a href="https://business.twitter.com" rel="noopener">ธุรกิจต่างๆ</a></li>
                <li className="StreamsFooter-item"><a href="//dev.twitter.com" rel="noopener">นักพัฒนา</a></li>
                <li className="StreamsFooter-item"><a href="/i/directory/profiles" rel="noopener">สารบบ</a></li>
                <li className="StreamsFooter-item"><a href="/settings/personalization" rel="noopener">การตั้งค่า</a></li>
                <li className="StreamsFooter-item StreamsFooter-copyright">© 2018 ทวิตเตอร์</li>
              </ul>
                </Footer>
                </Layout>
                </div>
                );
              }
            }
export default App;
