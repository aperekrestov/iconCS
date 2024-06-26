import webpack from 'webpack'
import { Configuration } from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from "./types/types"
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import path from 'path/posix'

export function buildPlugins({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] {
	const isDev = mode === 'development'
	const isProd = mode === 'production'

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.svg') }),
	]

	plugins.push(new CopyPlugin({
		patterns: [
			{ from: path.resolve(paths.src, 'icons-collection-svg'), to: path.resolve(paths.output, 'icons-collection-svg') },
			//todo реализовать структуру папок с ресурсами
			// { from: path.resolve(paths.src, 'assets'), to: path.resolve(paths.output, 'assets') },
		],
	}))

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin())
	}

	if (isProd) {
		plugins.push(new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}))
	}

	if (analyzer) {
		plugins.push(new BundleAnalyzerPlugin())
	}

	return plugins
}