module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    output: {
      path: __dirname + "/static",
      filename: "bundle.js",
    },
    context: __dirname,
    devtool: "source-map",
    devServer: {
      static: {
        directory: __dirname + "/public",
      },
    },
    module: {
      rules: [
        {
          test: /jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    },
  };
  