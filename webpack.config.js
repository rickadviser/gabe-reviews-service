const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        test: /\.scss$/,
        loader: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader', // creates style nodes from JS strings
      //     'css-loader', // translates CSS into CommonJS
      //     'sass-loader', // compiles Sass to CSS, using Node Sass by default
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
