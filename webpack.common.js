const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/client/index.html'
      },
    ])
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};