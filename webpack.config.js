const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',

        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [['env', {
            'modules': false
          }]]
        },

        test: /\.js$/
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },

      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },

      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      // {
      //   test: /\.css$/,
      //   use: [
      //     'stylus-loader',
      //     'vue-style-loader',
      //     'css-loader'
      //   ]
      // }
    ]
  },

  entry: './src/browser.vue',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    // included for magic!
    new VueLoaderPlugin()
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  }
}
