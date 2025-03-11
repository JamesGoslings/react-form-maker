module.exports = {
  devServer: {
    port: 3678,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      }
    }
  }
}