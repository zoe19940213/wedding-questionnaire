const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/wedding-questionnaire/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '~@/assets/styles/variables.sass'`
      }
    }
  }
});
