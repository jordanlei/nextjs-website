const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')


module.exports = withImages(withCSS(withSass({
    exportTrailingSlash: true,
    exportPathMap: function() {
      const paths = {
        '/': { page: '/' },
        '/blog':{ page: '/blog' },
        '/art':{ page: '/art' }
      };

      const posts= [
        {"id": 'how-to-engage-with-art'}, 
        {"id": 'on-brotherhood'}
      ];

      posts.forEach(post => {
        paths[`/p/${post.id}`] = { page: '/p/[id]', query: { id: post.id } };
      });

      return paths;
    }
  })))