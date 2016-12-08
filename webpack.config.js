var webpack = require('webpack');


module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
      alias: {
          Main: 'app/components/Main.jsx',
          aplicationStyles: 'app/styles/app.scss',
          Navigation: 'app/components/Navigation.jsx'
      },
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015','stage-0'],
            //za grešku u webpacku postavi compact: false
            //http://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e
            compact: false
          },
          test: /\.jsx?$/,
          exclude: /(node_modules | bower_components)/
        }
      ]
    },
    devtool: 'inline-source-map'
};
