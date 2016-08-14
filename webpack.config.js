let webpack = require('webpack');
let dirs = {
  dist: {
    scripts : 'public_html/assets/js',
    styles  : 'public_html/assets/css',
  },
  src: {
    scripts : 'src/js',
    styles  : 'src/scss',
  },
  theme: {
    styles : '_theme/thforestBedrockone1/styles',
    scripts: '_theme/thforestBedrockone1/scripts',
  },
};
module.exports = {
  entry: [
    // 'script!jquery/dist/jquery.min.js',
    `${dirs.src.scripts}/app.js`,
  ],
  externals: {
    // jquery: 'jQuery',
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   '$': 'jquery',
    //   'jQuery': 'jquery',
    //   "window.jQuery": "jquery",
    // }),
  ],
  output: {
    path: __dirname,
    filename: `${dirs.dist.scripts}/bundle.js`,
  },
  resolve: {
    root: __dirname,
    alias: {
      Main      : `${dirs.src.scripts}/main.js`,
      appStyles : `${dirs.src.styles}/main.scss`,
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      // the url-loader uses DataUrls.
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      // the file-loader emits files.
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-runtime'],
          cacheDirectory: true,
        },
      },
    ],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map',
};
