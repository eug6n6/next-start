const withSass = require('@zeit/next-sass')

module.exports = withSass({
  
  exportTrailingSlash: true,

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }

})