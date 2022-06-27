const path = require("path"); // same as import path from path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


//module.exports same thing as export default
module.exports  = {  
  entry: './src/page/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist"), 
    clean: true
  },
  mode: "development", //default = "production" where main.js would be 1 line
  devtool: "inline-source-map", // looks like code made, not the one formatted for browser
  devServer: {
    static: './dist',
    // open: true >>> to automatically open window but already did --open in package.json
    port: 5500 // can be 5500, 1880, one without other projects. default = 1880
  },
  module: {
    rules: [
      {
        test: /\.js/i,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i, //anything that matches this
        use: [MiniCssExtractPlugin.loader, 
          {loader: 
              'css-loader', 
              options: {
                importLoaders: 1
              }
          }, 
          'postcss-loader']
      }, 
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    // so it picks the right html
    new HtmlWebpackPlugin( {
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};