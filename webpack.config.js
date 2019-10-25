/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const slswebpack = require('serverless-webpack')
const DotenvWebpack = require('dotenv-webpack')

module.exports = (async () => {
  const accountId = await slswebpack.lib.serverless.providers.aws.getAccountId()
  const loadedPlugins = [
    new webpack.DefinePlugin({
      AWS_ACCOUNT_ID: `${accountId}`,
    }),
  ]

  if (process.env.NODE_ENV === 'development') {
    loadedPlugins.push(new DotenvWebpack())
  }

  return {
    entry: slswebpack.lib.entries,

    output: {
      libraryTarget: 'commonjs',
      filename: '[name].js',
      path: path.join(__dirname, '.webpack'),
    },

    mode: process.env.NODE_ENV || 'production',

    target: 'node',

    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,

    plugins: loadedPlugins,

    module: {
      rules: [
        {
          test: /\.js$/, // include .js files
          enforce: 'pre', // preload the jshint loader
          exclude: /node_modules/, // exclude any and all files in the node_modules folder
          include: __dirname,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
      loaders: [
        { exclude: ['node_modules'], loader: 'babel', test: /\.js?$/ },
      ],
    },

    resolve: {
      modules: [path.resolve(__dirname, '.'), 'node_modules'],
      extensions: ['.js', '.jsm', '.json'],
    },
  }
})()
