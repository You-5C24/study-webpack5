const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".json", ".js", ".vue"],
  },
};
