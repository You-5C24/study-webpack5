const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "scripts/[name].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 3000,
    headers: {
      "X-Access-Token": "abc123",
    },
    proxy: {
      "/api": "http://localhost:9000",
    },
    historyApiFallback: true,
    host: "0.0.0.0",
  },
};
