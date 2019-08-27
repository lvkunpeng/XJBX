const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output:{
        // filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html',
            filename:'index.html',
            chunks:'main',
            chunksSoftMode: 'manual'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        host:'localhost',
        compress: true,
        port:8080
    }
}