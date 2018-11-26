var path = require('path');
var webpack = require('webpack');
module.exports = {
    output: {
      library:"welcome"
      , libraryTarget:'var'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              use: {
                loader:'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
