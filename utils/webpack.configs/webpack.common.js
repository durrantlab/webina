const path = require("path");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const webpack = require('webpack');

module.exports = {

    plugins: [
        new DuplicatePackageCheckerPlugin(),
        // new webpack.ExtendedAPIPlugin()  // Gives hash as __webpack_hash__
        new webpack.IgnorePlugin({
            checkResource(resource) {
              return /vina\.worker\.js$/.test(resource);
            },
          }),
    ],
    module: {
        rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        mainFields: ["browser", "main", "module"],
        // alias: {
        //     'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        // }
    },
    output: {
        path: path.resolve(__dirname, "../../dist"),
    },
};
