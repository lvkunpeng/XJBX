const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use:['style-loader','css-loader']
      }
    ]
  },
  devServer:{
    contentBase: path.resolve(__dirname,'dist'),
    compress: true,
    port:8080,
    host: "localhost"
  },
  plugins:[
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes:true
      },
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      chunksSortMode: 'manual'
    })
  ]  
}