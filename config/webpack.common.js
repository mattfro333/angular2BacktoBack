var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    modules: ['node_modules', 'not_exist_path'],
    extensions: ['.js', '.ts', '.scss', '.css', '.json', '.html']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
       test: /\.html$/,
       exclude: [/node_modules/, helpers.root('./index.html')],
       use: "html-loader"

   },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        use: ExtractTextPlugin.extract({
         fallback: "style-loader",
         use: "css-loader!sass-loader"
       })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
 minify: {
     removeComments: true,
     collapseWhitespace: true,
     removeAttributeQuotes: true
 },
      name: ['app', 'vendor', 'polyfills']
    })
    ],

};
