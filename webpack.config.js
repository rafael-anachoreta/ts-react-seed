// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = (env, argv) => {
  const isProduction = argv?.mode === "production"

  const config = {
    entry: isProduction ? "./src" : "./src/index.tsx",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : "inline-source-map",
    devServer: isProduction
      ? {}
      : {
          static: "./dist",
        },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  }

  return config
}
