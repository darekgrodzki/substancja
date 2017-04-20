module.exports = {
    entry: "./js/main.jsx",
    output: {
        filename: "js/out.js"
    },
    watch: true,
    module: {
        loaders: [{
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-2','react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader','resolve-url-loader', 'sass-loader?sourceMap']
            },
            {
              test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
              loader : 'file-loader',
              query: {
                outputPath: "/myFonts/"
              }
       }
        ]
    }
}
