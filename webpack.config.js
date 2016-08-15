let path = require('path');
let webpack = require('webpack');
let dirs = {
  src: {
    scripts : 'src/js',
    styles  : 'src/scss',
  },
  theme: {
    scripts: '_theme/scripts',
    styles : '_theme/styles',
  },
  dist: {
    scripts : 'dist/assets/js',
    styles  : 'dist/assets/css',
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
      bootstrap : `${dirs.src.styles}/main.scss`,
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
      // the file-loader emits files.
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?hash=sha512&digest=hex&name=[hash].[ext]',
      //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //   ]
      // },
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
      // path.resolve(__dirname, './node_modules/foundation-sites/scss'),
      path.resolve(__dirname, './node_modules/bootstrap/scss'),
    ]
  },
  // devtool: 'cheap-module-eval-source-map',
};
