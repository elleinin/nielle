const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "/nielle/" : "/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/stylekit/stylekit.scss";`,
      },
    },
  },
});
