module.exports = {

  entry: './client/app.jsx',
  output: {
    path: 'dist',
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        }
      },
    ]
  }

};
