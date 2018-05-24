/* eslint "import/no-commonjs": 0 */

const path = require('path')
const webpack = require('webpack')
const LicenseWebpackPlugin = require('license-webpack-plugin')

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]
console.log(`NODE_ENV:\t\t${process.env.NODE_ENV}`);

module.exports = (env) => {
  return {
    entry:
    [
      './src/main.tsx'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './../public'),
      publicPath: '/'
    },
    devServer: {
      contentBase: 'public/',
      historyApiFallback: true,
      port: 8080,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".png", ".jpg"],
      modules: [
        path.resolve(__dirname, "./.."),
        path.resolve(__dirname, "./../src"),
        path.resolve(__dirname, "./../node_modules"),
      ],
    },
    plugins: process.env.NODE_ENV === 'production'
      ? BASE_PLUGINS.concat([
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          sourceMap: false,
          compressor: {
            warnings: false
          },
          output: {
            comments: false
          }
        }),
        new LicenseWebpackPlugin({
          pattern: /^(.*)$/,
          filename: 'licenses.txt'
        })
      ])
      : BASE_PLUGINS.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: "pre",
          use: [
            {
              loader: "tslint-loader",
              options: {
                tsConfigFile: "tsconfig.json",
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "ts-loader",
              options: {
                compilerOptions: {
                  declaration: false,
                },
              },
            }
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1',
            'postcss-loader?sourceMap=inline'
          ]
        }
      ]
    }
  }
}
