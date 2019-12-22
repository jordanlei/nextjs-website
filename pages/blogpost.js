import React, { Component } from 'react';
import Post_how_to_engage_with_art from '../blog_components/posts/post_how_to_engage_with_art';
const BlogPost = props => (
    // <div className= "landing-container">
    //     <h3>Welcome, {props.content.id}</h3>
    // </div>
    <Post_how_to_engage_with_art/>
  )
  
  BlogPost.getInitialProps = async function(context) {
    var content= context.query
    return {content}
  }
  
  export default BlogPost