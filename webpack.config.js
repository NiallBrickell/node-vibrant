const path = require("path");
const webpack = require("webpack");

const entry = "./src/bundle.ts";
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: {
        vibrant: entry,
        "vibrant.min": entry,
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"],
    },
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    configFile: "tsconfig.browser.json",
                },
            },
        ],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
};
