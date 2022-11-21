const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "lodash",
    }),
  ],
};
