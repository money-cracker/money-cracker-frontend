const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("This is Dev"),
    }),
  ],
};
