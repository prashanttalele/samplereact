const webpack = require('webpack');
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');

const env = dotenv.config().parsed;
console.log(env)
module.exports = {
  // ...
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(env.REACT_APP_API_URL)
    })
  ]
};
