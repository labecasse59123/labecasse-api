const path = require('path');

const webpackNodeExternals = require('webpack-node-externals');

module.exports = (env, argv = {}) => {
  const mode = argv.mode || 'development';

  // eslint-disable-next-line no-console
  console.log(`Building for ${mode}`);

  return {
    mode,

    stats: 'minimal',

    // Entry point.
    entry: './src/index.js',

    // Create the bundle at ./.dev/server.min.js
    output: mode === 'development' ? {
      path: path.join(__dirname, './.dev/'),
      filename: 'server.min.js',
      // Point sourcemap entries to original disk location (format as URL on Windows).
      devtoolModuleFilenameTemplate: info => path
        .relative(path.join(__dirname, './.dev'), info.absoluteResourcePath)
        .replace(/\\/g, '/'),
    } : {
      path: path.join(__dirname, './.dist/'),
      filename: 'server.min.js',
      devtoolModuleFilenameTemplate: info => path
        .relative(path.join(__dirname, './.dist'), info.absoluteResourcePath)
        .replace(/\\/g, '/'),
    },

    // Source map generation.
    devtool: mode === 'production' ?
      'source-map'
      : 'cheap-module-source-map',

    module: {
      rules: [
        {
          test: /\.json$/i,
          loader: 'json-loader',
        },

        // Use babel to parse js files.
        {
          test: /\.jsx?$/i,
          // Do not parse files in node_modules.
          exclude: /(node_modules)/i,
          loader: 'babel-loader',
        },

        // Lint files using eslint.
        {
          // Make sure that they are linted BEFORE they are transformed by babel.
          enforce: 'pre',
          test: /\.jsx?$/i,
          // Do not lint files in node_modules.
          exclude: /(node_modules)/i,
          loader: 'eslint-loader',
          options: {
            // Use root .eslintrc to get the config.
            configFile: '.eslintrc.js',
            // Do not stop the build on a lint error.
            emitWarning: true,
          },
        },
      ],
    },

    resolve: {
      // Resolve absolute imports using these paths (in this order).
      modules: [
        './src/',
        './node_modules/',
      ],
    },

    target: 'node',

    node: {
      // Don't replace __dirname in the bundle.
      __dirname: false,
    },

    // Don't bundle node modules, except @babel/polyfill.
    externals: [
      webpackNodeExternals({
        whitelist: ['@babel/polyfill'],
      }),
    ],
  };
};
