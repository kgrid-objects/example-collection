const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {

  output: {
    library: 'welcome',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist','v1.0.0'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      'metadata.json', 'service.yaml','deployment-specification.yaml'
    ])
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
