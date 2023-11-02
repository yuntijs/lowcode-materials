import pkgJson from '../package.json';
import markdown from './markdown/meta';

const components = [markdown].map(c => {
  if (c.npm) {
    c.npm.version = pkgJson.version;
  }
  return c;
});

// 注意不要使用 default 导出
export { components };
