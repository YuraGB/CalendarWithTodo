/**/
const path = require("path");
const webpack = require("webpack");
const StyleLintPlugin = require('stylelint-webpack-plugin');



module.exports = {
	entry: ['babel-polyfill','./src/index.js'],
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, './dist/'),
		library: "reactMODULES"
	},
	watch: true,
	devtool:"source-map",
	resolve: {
		modules: ['node_modules'],
		extensions: [".js"]
	},
	plugins: [
		//  new webpack.optimize.UglifyJsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "common"
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new StyleLintPlugin({
			files: 'frontEnd/style/**/*.css'
		})
	],
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'es2017',"stage-0"]
					}
				}
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
				use: {
					loader: 'url-loader?name=[name]-[hash].[ext]'
				}
			},

		
			/*{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					fix: true
				}
			}*/
		]
	},
	

};
