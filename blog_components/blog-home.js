import React, { Component } from 'react';
import BlogWelcome from './blog-welcome';
import BlogMenu from './blog-menu';
import BlogFeatured from './blog-featured';
import '../css/blog.css';

class BlogHome extends Component {
  render() {
    const items = {
      name : "blogpost-container",
      background: "linear-gradient(blue, black)",
      layers: [ 
      {image: require("../public/static/blog/background-1.svg"), depth: "-0.90", name: "layer1"},
      {image: require("../public/static/blog/background-2.svg"), depth: "-1.2",  name: "layer2"},
      {image: require("../public/static/blog/background-2.svg"), depth: "-1.0",  name: "layer3"},
      {image: require("../public/static/blog/background-2.svg"), depth: "-0.8",  name: "layer4"},
      ]
    }
    
    return (
      <div className="landing-container">
        <BlogMenu/>
        <BlogWelcome/>
        <BlogFeatured/>
      </div>
      
    );
  }
}

export default BlogHome;
