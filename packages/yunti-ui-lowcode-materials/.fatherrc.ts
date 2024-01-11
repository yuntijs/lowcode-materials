import { defineConfig } from 'father';
import { join } from 'path';

import { IS_DEV } from '../../constants';

const library = 'YuntiUiLowcode';

const externals = {
  react: 'var window.React',
  lodash: 'var window._',
  // @todo: 增加以下 externals 避免 'VERSION_PLACEHOLDER is not defined' 错误
  // '@alifd/next': 'var window.Next',
  // '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
  // '@alilc/lowcode-editor-core': 'var window.AliLowCodeEngine.common.editorCabin',
  // '@alilc/lowcode-editor-skeleton': 'var window.AliLowCodeEngine.common.skeletonCabin',
  // '@alilc/lowcode-designer': 'var window.AliLowCodeEngine.common.designerCabin',
  // '@alilc/lowcode-engine-ext': 'var window.AliLowCodeEngineExt',
  // '@ali/lowcode-engine': 'var window.AliLowCodeEngine',
};

const output = IS_DEV
  ? join(__dirname, '../../public/yunti-ui-lowcode-materials/dist/umd')
  : undefined;

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  umd: {
    entry: {
      'src/index.tsx': {
        name: library,
        sourcemap: true,
        externals,
        output,
      },
      'lowcode/meta.ts': {
        name: 'YuntiUiLowcodeMeta',
        sourcemap: true,
        externals,
        output,
      },
      'lowcode/view.tsx': {
        name: library,
        sourcemap: true,
        externals,
        output,
      },
    },
  },
});
