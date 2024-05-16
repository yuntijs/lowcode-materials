import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS } from '../utils';
import { AffixSnippets } from './snippets';

const AffixMetaInfo: IPublicTypeComponentMetadata = {
  componentName: 'Affix',
  title: 'Affix',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Affix',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      ...COMMON_CONFIGURE_PROPS,
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'offsetTop',
            'zh-CN': '距离窗口顶部达到指定偏移量后触发 ',
          },
          tip: 'offsetTop | Triggered when the specified offset is reached from the top of the window',
        },
        name: 'offsetTop',
        description: 'Triggered when the specified offset is reached from the top of the window',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'offsetBottom',
            'zh-CN': '距离窗口底部达到指定偏移量后触发',
          },
          tip: 'offsetBottom | Triggered when the specified offset is reached from the bottom of the window',
        },
        name: 'offsetBottom',
        description: 'Triggered when the specified offset is reached from the bottom of the window',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'target',
            'zh-CN': '监听其滚动事件的元素',
          },
          tip: 'target | Set the element that Affix needs to listen to its scroll event, the value is a function that returns the corresponding DOM element',
        },
        name: 'target',
        description:
          'Set the element that Affix needs to listen to its scroll event, the value is a function that returns the corresponding DOM element',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': 'prefixCls',
          },
        },
        name: 'prefixCls',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'rootClassName',
            'zh-CN': 'rootClassName',
          },
        },
        name: 'rootClassName',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '固定状态改变时触发的回调函数',
          template:
            "onChange(affixed, ${extParams}){\n// 固定状态改变时触发的回调函数 \nconsole.log('onChange', affixed);}",
        },
      ],
    },
    component: {},
  },
  category: '其他',
};

export const AffixMeta = {
  ...AffixMetaInfo,
  snippets: AffixSnippets,
};
