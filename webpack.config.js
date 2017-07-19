const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v')
const port = process.env.PORT

const babelConfig = {
  presets: [],
  plugins: [],
  cacheDirectory: !isProd
}

const config = {
  context: path.resolve(__dirname, './src'),
  entry: ['./entry.jsx'],
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: !isProd ? 'source-map' : false,
  devServer: {
    hot: true,
    port: port,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
  },
  stats: {
    colors: true,
    reasons: !isProd,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL)
      }
    }),
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              minimize: isProd
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()]
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              minimize: isProd
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.json$/,
        exclude: [
          path.resolve(__dirname, '../src/routes.json')
        ],
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader'
      }
    ]
  }
}

// Hot Module Replacement (HMR) + React Hot Reload
if (!isProd) {
  babelConfig.plugins.unshift('react-hot-loader/babel')
  // babelConfig.presets.unshift({modules: false})
  config.entry.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server'
  )
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
  config.plugins.push(new webpack.NamedModulesPlugin())
}

module.exports = config

