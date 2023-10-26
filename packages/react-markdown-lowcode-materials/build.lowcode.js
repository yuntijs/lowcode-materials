const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        library,
        engineScope: "@alilc",
        lowcodeDir: "lowcode", // 低码描述文件夹
        entryPath: "src/index.js", // 组件入口文件
        npmInfo: {
          package: "@yunti/react-markdown-lowcode-materials", // 包名
          version: "0.1.0",
        },
      },
    ],
  ],
};
