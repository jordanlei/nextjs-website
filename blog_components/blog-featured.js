import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class BlogFeatured extends Component {
  render() {
    return (
        <section id = "blog-featured">
        <div style={{paddingBottom: 2+"%", paddingLeft:"20%", paddingRight:"10%", backgroundColor: "none", height: "100vh"}}> 
            <div style={{height: "30vh"}}></div>           
            <div style={{color: 'rgba(255, 255, 255, 0.9)'}}>
            <Row>
            <Col md={3}>
            <Fade bottom duration={5000}>
                <h3>
                Featured Blog
                </h3>
            </Fade>
            </Col>
            <Col md={4}>
            </Col>
            <Col md={5}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis sem at lectus convallis fermentum. Nam eget fringilla magna. Nunc rhoncus mauris est, sed aliquet tortor pretium ut. Duis aliquet justo lorem. Nunc commodo molestie semper. Suspendisse condimentum finibus urna a aliquam. 
                </p>
            </Col>
            </Row>
            </div>
        </div>
        </section>
    );
  }
}

export default BlogFeatured;
