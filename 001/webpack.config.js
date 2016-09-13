var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, "app/app.js"),//编译文件入口
	output: {
		// 编译文件存放位置
		path: path.resolve(__dirname, "build"), // 路径
		filename: 'bundle.js' // 编译后的文件名
	}
}