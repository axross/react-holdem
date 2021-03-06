module.exports = {
  stories: ["../src/**/*.stories.(tsx|mdx)"],
  addons: ["@storybook/addon-docs"],
  webpackFinal: async config => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: require.resolve("ts-loader")
            },
            {
              loader: require.resolve("react-docgen-typescript-loader")
            }
          ]
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".ts", ".tsx"]
    }
  })
};
