module.exports = {
  entry: './src/index.js',
  output: { // where it lives
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: { // What it dose
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
