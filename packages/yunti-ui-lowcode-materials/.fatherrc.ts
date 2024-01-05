import { defineConfig } from 'father';
import { join } from 'path';
import { IS_DEV } from '../../constants';

const library = 'YuntiUiLowcode';

const externals = {
  react: 'var window.React',
  lodash: 'var window._',
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
