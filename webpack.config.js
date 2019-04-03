const path = require('path')

function scriptRules() {
  return [{
    test: /\.js$/,
    exclude: [/node_modules/],
    loader: 'babel-loader',
    options: {
      presets: ['@babel/env']
    }
  }]
}

module.exports = {
  entry: [
    './resources/assets/js/turbolinksInit.js',
    './resources/assets/js/app.js'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'app.js'
  },
  module: {
    rules: scriptRules()
  },
}

// Run Webpack
// ./node_modules/.bin/webpack --mode development