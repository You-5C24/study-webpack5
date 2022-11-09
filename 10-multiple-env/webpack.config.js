const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  return {
    entry: {
      index: "./src/index.js",
      another: "./src/another-module.js",
      // index: {
      //   import: "./src/index.js",
      //   dependOn: "shared",
      // },
      // another: {
      //   import: "./src/another-module.js",
      //   dependOn: "shared",
      // },
      // shared: "lodash",
    },
    output: {
      filename: "scripts/[name].[contenthash].js",
      path: path.resolve(__dirname, "./dist"),
      clean: true,
      assetModuleFilename: "images/[contenthash][ext]",
      publicPath: "http://localhost:8080/",
    },
    mode: env.production ? "production" : "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.png$/,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          type: "asset/inline",
        },
        {
          test: /\.txt$/,
          type: "asset/source",
        },
        {
          test: /\.jpeg$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 * 1024,
            },
          },
        },
        {
          test: /\.(css|less)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        },
        {
          test: /\.(csv|tsv)$/,
          use: "csv-loader",
        },
        {
          test: /\.xml$/,
          use: "xml-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [["@babel/plugin-transform-runtime"]],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "app.html",
        inject: "body",
      }),
      new MiniCssExtractPlugin({ filename: "style/[contenthash].css" }),
    ],
    optimization: {
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },

    devServer: {
      static: "./dist",
    },
  };
};
