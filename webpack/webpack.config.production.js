const webpack = require("webpack");
const webpackBase = require("./webpack.config.base");

const ENV = "production";
const webpackConfig = webpackBase(ENV);

webpackConfig.plugins.push(new webpack.DefinePlugin({
  PORTAL_ORIGIN: JSON.stringify("https://liviewm.com"),
  API_SERVER_ORIGIN: JSON.stringify("https://api.liviewm.com"),
  'process.env': {
    NODE_ENV: JSON.stringify(ENV),
  },
  ENV: JSON.stringify(ENV),
}));

module.exports = webpackConfig;
