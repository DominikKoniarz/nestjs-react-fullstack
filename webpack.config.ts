const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const getPageEntries = () => {
  const pagesDir = path.resolve(__dirname, 'src/view/pages');
  const entries = {};

  fs.readdirSync(pagesDir).forEach((file) => {
    const pageName = file.replace('.tsx', '');
    entries[pageName] = path.join(pagesDir, file);
  });

  return entries;
};

module.exports = {
  entry: {
    ...getPageEntries(),
    runtime: path.resolve(__dirname, 'src/view/runtime.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src/view/components'),
          path.resolve(__dirname, 'src/view/pages'),
          path.resolve(__dirname, 'src/view/runtime.ts'),
        ],
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(true),
    }),
  ],
  mode: 'development',
  devtool: 'source-map',
};
