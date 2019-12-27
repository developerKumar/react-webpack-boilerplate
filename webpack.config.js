const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "examples/src/index.js"),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js"
},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/, /lib/],
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: true,
          failOnWarning: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "examples/src/index.html"),
      filename: "./index.html"
    }),
    new PrettierPlugin({
      useTabs: false,
      semi: false,
      singleQuote: true,
      jsxSingleQuote: true,
      trailingComma: 'none',
      bracketSpacing: true,
      jsxBracketSameLine: true,
      arrowParens: 'avoid',
      endOfLine: 'lf'
    })
  ],
  resolve: {
      extensions: [".js", ".jsx"]
  },
  devServer: {
      port: 3000
  }
};
