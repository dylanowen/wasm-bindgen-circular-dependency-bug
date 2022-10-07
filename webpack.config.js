const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: {
    index: "./js/index.js"
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      watch: true,
    },
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'static/index.html'),
      chunks: 'all',
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
    topLevelAwait: true
  },
  resolve: {
    extensions: ['.js'],
  },
};
