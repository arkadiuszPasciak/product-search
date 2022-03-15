const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  mode: 'development',
  output: {
    path: __dirname
  },
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/assets/styles/_index.scss',
      },
    }
  ]
};
