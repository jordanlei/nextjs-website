const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')


module.exports = withImages(withCSS(withSass({
    webpack (config, options) {
      return config
    }
  })))