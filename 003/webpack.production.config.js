var path = require('path');
var webpack = require('webpack');

var node_modules = path.resolve(__dirname, "node_modules/");
var reactPath = path.resolve(node_modules, "react/dist/react.min.js");
var reactDomPath = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
	// 单一入口配置
	// entry: path.resolve(__dirname, "app/main.js")
	// ,
	// 
	// 将第三方的资源独立打包成一个文件引入，这样在应用更新以后用户也不需要重新下载。
	// entry: {
	// 	app: path.resolve(__dirname, "app/main.js"),
	// 	vendors: ['react', 'react-dom']
	// },
	// 
	entry: {
		app: path.resolve(__dirname, "app/main.js"),
		admin: path.resolve(__dirname, "app/admin-main.js"),
		vendors: ["react", "react-dom"]
	},
	resolve: {
		alias: {
			'react': reactPath,
			'react-dom': reactDomPath
		}
	},
	// 单入口的配置
	// output: {
	// 	path: path.resolve(__dirname, 'build'),
	// 	filename: 'bundle.js'
	// },
	// 
	// 多入口时的配置， 使用[name]变量
	output: {
		path: path.resolve(__dirname, "build"),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      		loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
			exclude: /node_modules/,
        	include: __dirname
		}],
		noParse: ['react']
	},
	// 需要用的一个webpack的插件 记得在index.html中引入vendors 不然会报错哟
	// 
	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  	]
}