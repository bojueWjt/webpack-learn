var path = require('path');

var node_modules = path.resolve(__dirname, "node_modules/");
var reactPath = path.resolve(node_modules, "react/dist/react.min.js");
var reactDomPath = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
	entry: [
		"webpack/hot/dev-server",
		path.resolve(__dirname, "app/main.js")
	],

	resolve: {
		alias: {
			'react': reactPath,
			'react-dom': reactDomPath
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      		loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
			exclude: /node_modules/,
        	include: __dirname
		}],
		noParse: ['react']
	}
}