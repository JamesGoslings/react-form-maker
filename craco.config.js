const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // 添加 resolve 配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
    },
  },
  // 配置 sass-loader
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'src')],
        },
      },
    },
  },
  devServer: {
    port: 3678,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      },
    },
  },
}
