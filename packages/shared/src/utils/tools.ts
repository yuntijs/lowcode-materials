import { config, plugins } from '@alilc/lowcode-engine';
import { IRendererAppHelper } from '@alilc/lowcode-renderer-core/lib/types';

export interface InitPluginsOptions {
  appHelper: IRendererAppHelper;
  registerOptions: any;
}
export const initPlugins = async (options: InitPluginsOptions) => {
  const { appHelper, registerOptions } = options;
  await plugins.init(registerOptions);
  config.setConfig({
    // designMode: 'live',
    locale: 'zh-CN',
    enableCondition: true,
    enableCanvasLock: true,
    // 默认绑定变量
    supportVariableGlobally: true,
    // simulatorUrl 在当 engine-core.js 同一个父路径下时是不需要配置的！！！
    // 这里因为用的是 alifd cdn，在不同 npm 包，engine-core.js 和 react-simulator-renderer.js 是不同路径
    simulatorUrl: [
      'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/css/react-simulator-renderer.css',
      // 'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/js/react-simulator-renderer.js',
      // 'http://localhost:5555/css/react-simulator-renderer.css',
      // 'http://localhost:5555/js/react-simulator-renderer.js',
      // 'https://cdn.tenxcloud.com/yunti/js/react-simulator-renderer.1.1.3.patch.2.js',
      'https://cdn.tenxcloud.com/yunti/@alilc/lowcode-react-simulator-renderer/1.1.11/js/react-simulator-renderer.js',
    ],
    appHelper,
  });
};
