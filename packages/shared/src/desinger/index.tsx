import { common, skeleton } from '@alilc/lowcode-engine';
import { Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { appHelper, initPlugins } from '../utils';
import './index.less';
import registerPlugins from './plugins';

export enum PluginIsInited {
  /** 未初始化 */
  uninitialized = 'uninitialized',
  /** 初始化中 */
  initializing = 'initializing',
  /** 初始化完成 */
  initialized = 'initialized',
}

export interface DesignerProps {
  scenarioName: string;
  displayName: string;
  assets: any;
}

// 可用于传递插件参数
const preference = new Map();
const Workbench = common.skeletonCabin.Workbench;

export const Designer: React.FC<DesignerProps> = ({ scenarioName, displayName, assets }) => {
  /** 插件是否已初始化成功，因为必须要等插件初始化后才能渲染 Workbench */
  const [isInited, setIsInited] = useState<PluginIsInited>(PluginIsInited.uninitialized);

  useEffect(() => {
    // 防止热更新重新注册插件报错
    if (isInited !== PluginIsInited.uninitialized) return;

    setIsInited(PluginIsInited.initializing);

    async function registerAndInitPlugins() {
      try {
        await registerPlugins(scenarioName, displayName, assets);
        await initPlugins({ appHelper, registerOptions: preference });
        setIsInited(PluginIsInited.initialized);
      } catch (err) {
        console.warn(err);
        message.error('插件初始化失败');
      }
    }

    registerAndInitPlugins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isInited !== PluginIsInited.initialized) {
    return (
      <div className="designer-loading-box">
        <Spin size="large" tip="Loading Designer ..." />
      </div>
    );
  }

  return <Workbench skeleton={skeleton} />;
};
