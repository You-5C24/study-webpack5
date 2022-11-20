const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  plugins: [new HtmlWebpackPlugin()],

  externals: {
    jquery: [
      "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js",
      "jQuery",
    ],
  },
  externalsType: "script",
};
