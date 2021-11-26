module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("file-loader")
      .loader("image-webpack-loader");
  },
};
