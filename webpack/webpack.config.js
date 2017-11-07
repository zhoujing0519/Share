var webpack = require('webpack');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: 'app.js',
		path: __dirname + '/dist/js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
			},
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
			{
                test: /\.(woff2?|eot|ttf|otf|svg|jpg|png)(\?.*)?$/,
                loader: 'url-loader',
            }
		]
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(), // 热加载插件
		// new webpack.optimize.UglifyJsPlugin(), // 压缩JS文件插件
	],
	devServer: {
        // contentBase: "./",//本地服务器所加载的页面所在的目录
        // historyApiFallback: true,//不跳转
        // inline: true,
        // hot: true
    },
};