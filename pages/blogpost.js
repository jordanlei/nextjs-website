import React, { Component } from 'react';
import Post_brotherhood from '../blog_components/posts/post_brotherhood';
const BlogPost = props => (
    // <div className= "landing-container">
    //     <h3>Welcome, {props.content.id}</h3>
    // </div>
    <Post_brotherhood/>
  )
  
  BlogPost.getInitialProps = async function(context) {
    var content= context.query
    return {content}
  }
  
  export default BlogPost