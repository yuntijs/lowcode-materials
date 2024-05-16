import pkgJson from '../package.json';
import { AffixMeta } from './Affix/meta';
import { AlertMeta } from './Alert/meta';
import { AnchorMeta } from './Anchor/meta';
import { AppMeta } from './App/meta';
import { AutoCompleteMeta } from './AutoComplete/meta';
import { AvatarMeta } from './Avatar/meta';
import { ButtonMeta } from './Button/meta';
import { MonacoDiffEditorMeta, MonacoEditorMeta } from './MonacoEditor/meta';
import { SliderInputMeta } from './SliderInput/meta';
import { TreeMeta } from './Tree/meta';

const components = [
  TreeMeta,
  MonacoEditorMeta,
  MonacoDiffEditorMeta,
  SliderInputMeta,
  AffixMeta,
  AlertMeta,
  AnchorMeta,
  AppMeta,
  AutoCompleteMeta,
  AvatarMeta,
  ButtonMeta,
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
