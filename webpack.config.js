const htmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
	entry: "./app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "app.js",
		clean: true,
		publicPath: "",
	},
	mode: "development",
	devtool: "eval-cheap-source-map", // original lines
	plugins: [
		new htmlWebpackPlugin({
			template: "index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	devServer: {
		devMiddleware: {
			writeToDisk: true,
		},
		hot: true,
		static: {
			directory: path.join(__dirname, "./"),
		},
	},
};
