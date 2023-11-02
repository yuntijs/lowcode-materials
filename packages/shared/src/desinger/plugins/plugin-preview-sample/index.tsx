import { Button } from '@alifd/next';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { saveSchema } from '../../../services/mockService';

// 保存功能示例
const PreviewSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const doPreview = () => {
        const scenarioName = config.get('scenarioName');
        saveSchema(scenarioName);
        setTimeout(() => {
          const search = window.location.search
            ? `${window.location.search}&scenarioName=${scenarioName}`
            : `?scenarioName=${scenarioName}`;
          window.open(`/~demos/packages-shared-demo-preview${search}`);
        }, 500);
      };
      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button type="primary" onClick={() => doPreview()}>
            预览
          </Button>
        ),
      });
    },
  };
};
PreviewSamplePlugin.pluginName = 'PreviewSamplePlugin';
PreviewSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default PreviewSamplePlugin;
