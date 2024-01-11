import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';

import { PUBLIC_PATH } from './constants';

const headPkgList: string[] = [];
const pkgDirList = readdirSync(join(__dirname, 'packages')).filter(
  pkg => !pkg.includes('.') && !headPkgList.includes(pkg)
);
const pkgs = {
  'shared': 'lowcode-materials-shared',
  'react-markdown-lowcode-materials': 'react-markdown-lowcode-materials',
  'yunti-ui-lowcode-materials': 'ui-lowcode-materials',
};
export const alias = pkgDirList.reduce((pre, name) => {
  pre[`@yuntijs/${pkgs[name]}`] = join(__dirname, 'packages', name, 'src');
  return {
    ...pre,
  };
}, {});

export default defineConfig({
  alias,
  // autoAlias: true,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'lowcode-materials', dir: 'packages' }],
  },
  favicons: [`${PUBLIC_PATH}img/favicon.ico`],
  publicPath: PUBLIC_PATH,
  themeConfig: {
    logo: `${PUBLIC_PATH}img/logo.svg`,
    nav: [
      { title: '开发指南', link: '/guide' },
      { title: '组件总览', link: '/lowcode-materials/overview' },
    ],
  },
  ignoreMomentLocale: true,
  mfsu: {
    strategy: 'normal',
    shared: {
      react: {
        singleton: true,
      },
    },
  },
  // 默认重定向到子包的 src 文件夹
  monorepoRedirect: {
    peerDeps: true,
    useRootProject: true,
  },
  lessLoader: {
    javascriptEnabled: true,
    strictMath: false,
    math: 'parens-division',
    modifyVars: {
      // '@ant-prefix': PREFIX_CLS,
    },
  },
  externals: {
    'react': 'var window.React',
    'react-dom': 'var window.ReactDOM',
    'prop-types': 'var window.PropTypes',
    'lodash': 'var window._',
    // 以下仅 /~demos 开头的设计页面可用
    '@alifd/next': 'var window.Next',
    '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
    '@alilc/lowcode-editor-core': 'var window.AliLowCodeEngine.common.editorCabin',
    '@alilc/lowcode-editor-skeleton': 'var window.AliLowCodeEngine.common.skeletonCabin',
    '@alilc/lowcode-designer': 'var window.AliLowCodeEngine.common.designerCabin',
    '@alilc/lowcode-engine-ext': 'var window.AliLowCodeEngineExt',
    '@ali/lowcode-engine': 'var window.AliLowCodeEngine',
    'moment': 'var window.moment',
  },
  headScripts: [
    'https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js',
    'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
    'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js',
  ],
});
