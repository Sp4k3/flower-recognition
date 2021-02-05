module.exports = {
  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://server:4000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
