module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: ["last 1 version", "> 1%"],
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
