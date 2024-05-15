const path = require('path');

module.exports = {
  entry: './server.mjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
  mode: 'production',
};