module.exports = {
    entry: ['whatwg-fetch', './js/main.jsx'],
    devServer:{
      inline: true,
      contentBase: './',
      port: 8080
    },
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
            }
        ]
    }
}
