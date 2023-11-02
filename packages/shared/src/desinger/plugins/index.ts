import { plugins } from '@alilc/lowcode-engine';
import CodeEditorPlugin from '@alilc/lowcode-plugin-code-editor';
import ComponentPanelPlugin from '@alilc/lowcode-plugin-components-pane';
import DataSourcePanePlugin from '@alilc/lowcode-plugin-datasource-pane';
import InjectPlugin from '@alilc/lowcode-plugin-inject';
import ManualPlugin from '@alilc/lowcode-plugin-manual';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop';
import SimulatorResizerPlugin from '@alilc/lowcode-plugin-simulator-select';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en';
import PluginCodeGen from '@yunti/lowcode-plugin-code-generator';
import DefaultSettersRegistryPlugin from './plugin-default-setters-registry';
import EditorInitPlugin from './plugin-editor-init';
import LogoSamplePlugin from './plugin-logo-sample';
import PreviewSamplePlugin from './plugin-preview-sample';
import SaveSamplePlugin from './plugin-save-sample';
import SimulatorLocalePlugin from './plugin-simulator-locale';

async function registerPlugins(scenarioName: string, displayName: string, assets: any) {
  await plugins.register(InjectPlugin);

  await plugins.register(EditorInitPlugin, {
    assets,
    scenarioName,
    displayName,
    /* info: {
      urls: [
        {
          key: '设计器',
          value: 'https://github.com/alibaba/lowcode-demo/tree/main/demo-general',
        },
        {
          key: 'fusion-ui 物料',
          value: 'https://github.com/alibaba/lowcode-materials/tree/main/packages/fusion-ui',
        },
        {
          key: 'fusion 物料',
          value: 'https://github.com/alibaba/lowcode-materials/tree/main/packages/fusion-lowcode-materials',
        }
      ],
    }, */
  });

  // 设置内置 setter 和事件绑定、插件绑定面板
  await plugins.register(DefaultSettersRegistryPlugin);

  await plugins.register(LogoSamplePlugin);

  await plugins.register(ComponentPanelPlugin);

  await plugins.register(SchemaPlugin, { isProjectSchema: true });

  await plugins.register(ManualPlugin);

  // 注册回退/前进
  await plugins.register(UndoRedoPlugin);

  // 注册中英文切换
  await plugins.register(ZhEnPlugin);

  await plugins.register(SetRefPropPlugin);

  await plugins.register(SimulatorResizerPlugin);

  // 插件参数声明 & 传递，参考：https://lowcode-engine.cn/site/docs/api/plugins#%E8%AE%BE%E7%BD%AE%E6%8F%92%E4%BB%B6%E5%8F%82%E6%95%B0%E7%89%88%E6%9C%AC%E7%A4%BA%E4%BE%8B
  await plugins.register(DataSourcePanePlugin, {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
      {
        type: 'jsonp',
      },
    ],
  });

  await plugins.register(CodeEditorPlugin);

  // 注册出码插件
  await plugins.register(PluginCodeGen, {
    solution: 'umi',
    workerJsUrl:
      'http://172.22.96.37/@yunti/lowcode-code-generator@2.2.1/dist/standalone-worker.min.js',
  });

  await plugins.register(SaveSamplePlugin);

  await plugins.register(PreviewSamplePlugin);

  // 设计器区域多语言切换
  await plugins.register(SimulatorLocalePlugin);
}

export default registerPlugins;
