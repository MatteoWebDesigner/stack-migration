import CopyPlugin from "copy-webpack-plugin";

export default {
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
}