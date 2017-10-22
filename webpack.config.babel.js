import CopyPlugin from "copy-webpack-plugin";

export default {
  entry: { 
    "./build-legacy/bundle": "./src/app-legacy.js",
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
          {
            loader: "ng-annotate-loader",
            options: {
              ngAnnotate: "ng-annotate-patched",
            }
          },
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
      { from: "src/index-legacy.html", to: "build-legacy/index.html" },
      { from: "src/index.html", to: "build/index.html" },
      { from: "src/app.css", to: "build/app.css" },
    ])
  ]
}