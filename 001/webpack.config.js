var path = require('path');

module.exports = {
	// 为webpack 的热部署添加一个入口
	entry: ["webpack/hot/dev-server",path.resolve(__dirname, "app/app.js")],//编译文件入口
	output: {
		// 编译文件存放位置
		path: path.resolve(__dirname, "build"), // 路径
		filename: 'bundle.js' // 编译后的文件名
	}
}