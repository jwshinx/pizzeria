// process.env.NODE_ENV = process.env.NODE_ENV || 'development'
// const environment = require('./environment')
// module.exports = environment.toWebpackConfig()

// installed: yarn add fork-ts-checker-webpack-plugin --dev
// so need to modify this file
// see: https://firxworx.com/blog/coding/configuring-ruby-on-rails-to-support-react-typescript-with-webpacker/
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const environment = require('./environment')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

environment.plugins.append(
  'ForkTsCheckerWebpackPlugin',
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      configFile: path.resolve(__dirname, '../../tsconfig.json'),
    },
    // non-async type checking will block compilation on error
    async: false,
  }),
)

module.exports = environment.toWebpackConfig()