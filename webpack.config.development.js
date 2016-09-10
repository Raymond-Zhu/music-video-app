/* eslint max-len: 0 */
import webpack from 'webpack';
import baseConfig from './webpack.config.base';

const config = {
  ...baseConfig,

  debug: true,

  devtool: 'cheap-module-eval-source-map',

  entry: {
    index: ['./app/index','webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'],
    youtube: ['./app/youtube/youtube','webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr']
  },

  output: {
    ...baseConfig.output,
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:3000/dist/'
  },

  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,

      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },

      {
        test: /^((?!\.global).)*\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  },

  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  target: 'electron-renderer'
};

export default config;
