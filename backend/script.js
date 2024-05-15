const path = require('path');
const fs = require('fs');

module.exports = {
  entry: {
    server: './server.mjs',
    users: './users.json',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
      },
      {
        test: /\.json$/,
        type: 'json',
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          const { server, users } = compilation.assets;

          if (server) {
            fs.writeFileSync(path.resolve(__dirname, 'dist', 'server.mjs'), server.source());
          }

          if (users) {
            fs.writeFileSync(path.resolve(__dirname, 'dist', 'users.json'), users.source());
          }
        });
      },
    },
  ],
};