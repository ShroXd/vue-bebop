module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/dev": {
        target: "http://localhost:4040/api/v1",
        changeOrigin: true,
        pathRewrite: {
          "^/dev": ""
        }
      }
    }
  },
};
