module.exports = {
  publicPath: "",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~/src/assets/scss/main.scss";
        `
      }
    }
  }
};