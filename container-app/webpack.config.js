const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: "index.html", to: '', flatten: false }
    ]),
]
};
