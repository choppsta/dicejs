import path from 'path';
import webpack from 'webpack';

// common conf
const conf = {
  entry: path.resolve(__dirname, './src/Dice.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'dice.min.js',
    library: 'DiceJS',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    })
  ],
  performance: {
    maxEntrypointSize: 10000,
    maxAssetSize: 10000
  }
};

export default conf;
