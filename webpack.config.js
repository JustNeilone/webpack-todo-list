const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
  {
    entry: './src/index.js',
    mode: 'development',
    target: 'web',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: './public/favicon.ico',
        manifest: './public/manifest.json',
        template: './public/index.html',
      })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          type: 'asset/resource'
        }
      ],
    },
  }
];