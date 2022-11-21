const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: {
      import: ["./src/app.js", "./src/app2.js"],
      dependOn: "lodash",
      filename: "chanel1/[name].js",
    },
    main2: {
      import: "./src/app3.js",
      dependOn: "lodash",
      filename: "chanel2/[name].js",
    },
    lodash: {
      import: "lodash",
      filename: "common/[name].js",
    },
  },
  output: {
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "multiple-1",
      template: "./src/index.html",
      filename: "chanel1/index.html",
      inject: "body",
      chunks: ["main", "lodash"],
      publicPath: "http://localhost:8080/",
    }),
    new HtmlWebpackPlugin({
      title: "multiple-2",
      template: "./src/index2.html",
      filename: "chanel2/index.html",
      inject: "body",
      chunks: ["main2", "lodash"],
      publicPath: "http://localhost:8080/",
    }),
  ],
  devServer: {
    static: "./dist",
  },
};
