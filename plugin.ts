import type { IApi } from 'dumi';

const isProd = process.env.UMI_ENV === 'prod';

const REACT_SCRTPS = {
  prod: [
    'https://g.alicdn.com/code/lib/react/17.0.2/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/17.0.2/umd/react-dom.production.min.js',
  ],
  dev: [
    'https://g.alicdn.com/code/lib/react/17.0.2/umd/react.development.js',
    'https://g.alicdn.com/code/lib/react-dom/17.0.2/umd/react-dom.development.js',
  ],
};

const LOW_CODE_HEAD_SCRIPTS = [
  'https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js',
  'https://g.alicdn.com/code/lib/alifd__next/1.26.8/next.min.js',
  'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.3.2/dist/js/engine-core.js',
  'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6/dist/js/engine-ext.js',
];

const LOW_CODE_LINKS = [
  {
    href: 'http://dev-unpkg.tenxcloud.net/@tenx-ui/icon@2.4.12/dist/@tenx-ui/icon.css',
    rel: 'stylesheet',
  },
  {
    href: 'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/variables.css',
    rel: 'stylesheet',
  },
  {
    href: 'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light@0.2.1/dist/next.var.min.css',
    rel: 'stylesheet',
  },
  {
    href: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.3.2/dist/css/engine-core.css',
    rel: 'stylesheet',
  },
  {
    href: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6/dist/css/engine-ext.css',
    rel: 'stylesheet',
  },
];

const ProjectPlugin = (api: IApi) => {
  api.modifyHTML(($, { path }) => {
    const scripts = REACT_SCRTPS[isProd ? 'prod' : 'dev'].map(
      src => `<script src="${src}"></script>`
    );
    const lowCodeScripts = [...REACT_SCRTPS.prod, ...LOW_CODE_HEAD_SCRIPTS].map(
      src => `<script type="text/javascript" src="${src}"></script>`
    );
    const lowCodeLinks = LOW_CODE_LINKS.map(
      ({ href, rel }) => `<link href="${href}" rel="${rel}">`
    );
    if (isProd) {
      // 生产环境中通过 yunti-server ejs render 在不同的页面引入不同的依赖
      $('head').append(
        `[? if (LOW_CODE) { ?]
${lowCodeLinks.join('\n')}
${lowCodeScripts.join('\n')}
[? } else { ?]
${scripts.join('\n')}
[? } ?]`
      );
    } else {
      // 仅为设计页面增加 LowCode 相关资源文件
      if (path.startsWith('/~demos/')) {
        $('head').append(
          `${lowCodeLinks.join('\n')}
${lowCodeScripts.join('\n')}`
        );
      } else {
        $('head').append(`
${scripts.join('\n')}
        `);
      }
    }
    return $;
  });
};

export default ProjectPlugin;
