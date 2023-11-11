// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack hook for stopping compilation on error
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const breakOnErrorHook = function () {
  this.hooks.done.tapAsync('done', function (stats, callback) {
    if (stats.compilation.errors.length > 0) {
      throw new Error(stats.compilation.errors.map((err) => err.message || err));
    }
    callback();
  });
};

/*eslint-env node*/
module.exports = [
  {
    entry: './src/index.tsx',
    mode: 'development',
    target: 'web',
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './assets/index.html'
      }),
      breakOnErrorHook
    ],
    resolve: {
      extensions: ['.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader']
        },
        {
          test: /\.(ts|tsx)$/,
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
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          type: 'asset/resource'
        }
      ]
    }
  }
];
