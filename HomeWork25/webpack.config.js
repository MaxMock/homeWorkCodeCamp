var path = require('path')
var webpack = require('webpack')
module.exports = {
 entry: path.resolve('src/index.js'),//อ่านไฟล์ที่ไหนที่
 output: {
   filename: 'bundle.js',//outputไปไว้ที่ตรงไหน
   path: path.resolve('dist'),
   publicPath:'dist'
 },
//  plugins: [
//   new webpack.ProvidePlugin({
//   $: "jquery",
//   jquery: "jQuery",
//   "windows.jQuery": "jquery"
//   })
//   ],
module: {
  rules: [
    {
      test: /\.js$/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      }
    }
  ],
}
}
