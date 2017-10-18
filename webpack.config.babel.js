import CopyPlugin from "copy-webpack-plugin";

export default {
  entry: { 
    "./build/bundle": './src/app.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ng-annotate-loader',
            options: {
              ngAnnotate: 'ng-annotate-patched',
            }
          },
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html', to: 'build/index.html' },
      { from: 'src/app.css', to: 'build/app.css' },
    ])
  ]
}