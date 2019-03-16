const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

const API_PORT = process.env.API_PORT || 3003;
module.exports = function(env) {
  return {
    mode: env,
    entry: "./src/index.tsx",
    output: {
      path: `${__dirname}/dist`,
      filename: "main.bundle.js"
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devServer: {
      proxy: {
        "/api": `http://localhost:${API_PORT}`
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html"
      })
    ],
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    }
  };
};
