import pkgJson from '../package.json';
import { AlertMeta } from './Alert/meta';
import { MonacoDiffEditorMeta, MonacoEditorMeta } from './MonacoEditor/meta';
import { SliderInputMeta } from './SliderInput/meta';
import { TreeMeta } from './Tree/meta';

const components = [
  TreeMeta,
  MonacoEditorMeta,
  MonacoDiffEditorMeta,
  SliderInputMeta,
  AlertMeta,
].map(c => {
  if (c.npm) {
    c.npm.version = pkgJson.version;
  }
  if (!c.group) {
    c.group = 'YuntiUI 组件';
  }
  return c;
});

// 注意不要使用 default 导出
export { components };
