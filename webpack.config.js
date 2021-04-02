const HtmlWebpackPlugin = require('html-webpack-plugin')

function createConfig() {
  return {
    mode: 'development',
    output: {
      clean: true,
    },
    devServer: {
      hot: true,
      port: 5800,
    },
    plugins: [new HtmlWebpackPlugin({ title: 'pure-webpack-server' })],
  }
}

const config = createConfig()
module.exports = config
