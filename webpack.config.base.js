const webpack = require("webpack");
const path = require("path");

const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "js/[name].js",
    chunkFilename: "lib/[name].min.js",
    publicPath: "/",
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [
      ".ejs",
      ".js",
      ".jsx",
      ".json",
      ".css",
      ".scss",
      ".ts",
      ".tsx",
    ],
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Containers: path.resolve(__dirname, "src/containers"),
      Utils: path.resolve(__dirname, "src/utils"),
      Images: path.resolve(__dirname, "src/images"),
      Translations: path.resolve(__dirname, "src/translations"),
      Customhooks: path.resolve(__dirname, "src/customHooks"),
    },
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [path.resolve(__dirname, "src")],
        enforce: "post",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/typescript",
                "@babel/preset-react",
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[folder]__[local]___[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(?:png|jpg|gif|svg)$/,
        loader: "url-loader?limit=8192&name=image/[hash].[ext]",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: env && env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : ".env",
    }),
    new HtmlWebpackPlugin({
      title: "react",
      filename: "index.html",
      template: "src/index.html",
    }),
    new webpack.DefinePlugin({}),
  ],
});
