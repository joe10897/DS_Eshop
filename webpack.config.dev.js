const path = require("path");

const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const merge = require("webpack-merge");

const base = require("./webpack.config.base");

const port = 3000;
const host = `http://localhost:${port}/`;

module.exports = (env) =>
  merge.smartStrategy({ "module.rules.use": "replace" })(base(env), {
    entry: {
      bundle: ["react-hot-loader/patch", "./src/index.js"],
    },
    resolve: {
      alias: { "react-dom": "@hot-loader/react-dom" },
    },
    devtool: "eval-source-map",
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
                  "@babel/preset-react",
                  "@babel/preset-env",
                  "@babel/preset-typescript",
                ],
                plugins: [
                  "@babel/plugin-proposal-object-rest-spread",
                  "@babel/plugin-syntax-dynamic-import",
                  "react-hot-loader/babel",
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new OpenBrowserPlugin({
        url: host,
      }),
    ],
    devServer: {
      contentBase: [path.join(__dirname, "dist/public")],
      compress: true, // enable gzip compression
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
      port,
    },
  });
