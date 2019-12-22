import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class BlogMenu extends Component {
  
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="blog-welcome" href= "" spy={true} smooth={true} duration= {800}> Top</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="blog-featured" href= "" spy={true} smooth={true} duration= {800}> Featured</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="blog-posts" href= "" spy={true} smooth={true} duration= {800}> Posts</Link>
          </NavItem>
          <a href="/">Home</a>
        </Nav>
      </div>
    );
  }
}

export default BlogMenu;
