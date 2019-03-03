const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return {
    mode: env,
    entry: './src/index.tsx',
    output: {
      path: `${__dirname}/dist`,
      filename: 'main.bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'index.html'
    })],
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    }
  }
}
