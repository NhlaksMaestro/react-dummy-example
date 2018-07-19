var path = require('path');
var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:8350',
      'webpack/hot/only-dev-server',
      './sys/index'
  ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".xml"]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      devFlagPlugin
      //new webpack.NoErrorsPlugin()//,
      //new webpack.ProvidePlugin({
      //    $: "jquery",
      //    jQuery: "jquery"
      //})
    ],
    module: {
      rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
          }
        }
      }
    ]
    }
};
