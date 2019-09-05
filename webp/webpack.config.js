const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 每次打包前清除文件夹中的内容 
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 将css文件从行内中提取出来
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode:'development',
  // 单文件入口
  // entry: './src/index.js',
  // 多文件入口
  entry:{
    index: './src/index.js',
    login: './src/login.js'
  },
  output: {
    // filename: 'main.js',
    // 多入口打包时候，注意将文件名写为变量，会将entry中的key对应为变量name
    // 这里面的hash为 对本次编译过程的文件名hash值   所以生成的所有hash值都是一样的  :8 为前8位
    filename: '[name].[hash:8].js',
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use:['style-loader','css-loader'] 
        use:[MiniCssExtractPlugin.loader,'css-loader'] 
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use: 'file-loader'
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
      // 避免缓存添加资源的hash值 
      hash: true,
      // 参考生成html的模板文件
      template: './src/index.html',
      filename: 'index.html',
      // 如果不指定chunks会自动将所有打包过得入扣文件注入，如果加上次参数，会找到对应的入口文件注入
      chunks:['index'],
      // 当chunks为多个时候，对引入的代码块进行排序的模式  manual手工排序
      chunksSortMode: 'manual',
    }),
    new CleanWebpackPlugin(
      // [
      //   path.join(__dirname,'dist')
      // ]
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]  
}