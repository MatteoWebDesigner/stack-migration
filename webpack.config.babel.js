import CopyPlugin from "copy-webpack-plugin";
import UglifyJSPlugin from "uglifyjs-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default function (env) {
  let config = {
    entry: {
      "./build/bundle": "./src/app.js"
    },
    output: {
      path: __dirname,
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            { loader: "babel-loader" }
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      new CopyPlugin([
        { from: "src/index.html", to: "build/index.html" },
        { from: "src/app.css", to: "build/app.css" },
      ])
    ]
  };

  if (env === "analyze") {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
}