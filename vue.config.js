const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import 'variables'; @import 'mixins';`,
        includePaths: [path.join(__dirname, "./src/styles")]
      }
    }
  }
};
