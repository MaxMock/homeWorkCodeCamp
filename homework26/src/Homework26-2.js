import Head from 'next/head'
import { Menu, Carousel, Card, Row, Col, Rate } from 'antd'
export default () => (
  <div>
    <Head>
     
    </Head>
    <div className="header" >
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="product">
          <h3>Product</h3>
        </Menu.Item>
        <Menu.Item key="About">
          <h3>About</h3>
        </Menu.Item>
      </Menu>
    </div>
    <div className="content">
      <Carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
      <div className="gutter-example">
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div className="custom-card">
                <h3>Europe Street beat</h3>
                <p>www.instagram.com</p>
                <p><Rate /></p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
   
  </div>
)