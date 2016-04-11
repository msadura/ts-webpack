var path = require('path'),
  __appDir = path.join(__dirname, 'app'),
  __buildDir = path.join(__dirname, 'dist');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/bootstrap.ts'
  ],

  output: {
    // publicPath: '', // 'publicPath' in index.html static files' urls is translated to 'path'
    path: __buildDir,
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.scss']
  },

  devtool: 'eval-source-map',

  devServer: {
    contentBase: __appDir
  },

  node: {
//    fs: "empty"
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.jsx?$/,
        include: [
          __appDir
        ],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.t?ts$/,
        include: [
          __appDir
        ],
        loader: 'ts-loader'
      }
    ]
  }
};
