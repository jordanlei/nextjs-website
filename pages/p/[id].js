import { useRouter } from 'next/router';
import Post_brotherhood from '../../blog_components/posts/post_brotherhood.js'
import Post_how_to_engage_with_art from '../../blog_components/posts/post_how_to_engage_with_art.js'

export default function Post() {
  const router = useRouter();
  var posts= {
      "how-to-engage-with-art": <Post_how_to_engage_with_art/>,
      "on-brotherhood": <Post_brotherhood/>
  }

  if (router.query.id in posts){
    return (
        <div>
        {posts[router.query.id]}
        </div>
    );
  }
  else{
    return (
        <div>
            Not found.
        </div>
    )
  }
  
}