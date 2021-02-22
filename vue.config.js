module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: true,
    },
  },
  transpileDependencies: ["quasar"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
      },
    },
  },
};
