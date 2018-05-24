const webpack = require("webpack");
const webpackBase = require("./webpack.config.base");

const ENV = "local";
const webpackConfig = webpackBase(ENV);

webpackConfig.plugins.push(new webpack.DefinePlugin({
  PORTAL_ORIGIN: JSON.stringify("http://localhost:8080"),
  API_SERVER_ORIGIN: JSON.stringify("http://localhost:3000"),
  ENV: JSON.stringify(ENV),
}));

module.exports = webpackConfig;
