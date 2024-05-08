import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS } from '../utils';
import { AlertSnippets } from './snippets';

const AlertMetaInfo: IPublicTypeComponentMetadata = {
  componentName: 'Alert',
  title: 'Alert',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Alert',
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
            'en-US': 'type',
            'zh-CN': '类型',
          },
          tip: 'type | Type of Alert styles, options:`success`, `info`, `warning`, `error`',
        },
        name: 'type',
        description: 'Type of Alert styles, options:`success`, `info`, `warning`, `error`',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'warning',
                value: 'warning',
              },
              {
                label: 'error',
                value: 'error',
              },
              {
                label: 'success',
                value: 'success',
              },
              {
                label: 'info',
                value: 'info',
              },
            ],
            options: [
              {
                label: 'warning',
                value: 'warning',
              },
              {
                label: 'error',
                value: 'error',
              },
              {
                label: 'success',
                value: 'success',
              },
              {
                label: 'info',
                value: 'info',
              },
            ],
          },
          initialValue: 'warning',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'closable',
            'zh-CN': '可关闭',
          },
          tip: 'closable | Whether Alert can be closed',
        },
        name: 'closable',
        description: 'Whether Alert can be closed',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'closeText',
            'zh-CN': '自定义关闭按钮',
          },
          tip: 'closeText | @deprecated please use `closeIcon` instead.',
        },
        name: 'closeText',
        description: '@deprecated please use `closeIcon` instead.',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'message',
            'zh-CN': '提示内容',
          },
          tip: 'message | Content of Alert',
        },
        name: 'message',
        description: 'Content of Alert',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'description',
            'zh-CN': '辅助信息',
          },
          tip: 'description | Additional content of Alert',
        },
        name: 'description',
        description: 'Additional content of Alert',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'showIcon',
            'zh-CN': '显示图标',
          },
          tip: 'showIcon | Whether to show icon',
        },
        name: 'showIcon',
        description: 'Whether to show icon',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': '自定义类名前缀',
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
            'zh-CN': '根类名',
          },
        },
        name: 'rootClassName',
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
            'en-US': 'banner',
            'zh-CN': '用作顶部公告',
          },
        },
        name: 'banner',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'icon',
            'zh-CN': '自定义图标',
          },
        },
        name: 'icon',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'closeIcon',
            'zh-CN': '自定义关闭图标',
          },
          tip: 'closeIcon | Custom closeIcon',
        },
        name: 'closeIcon',
        description: 'Custom closeIcon',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'action',
            'zh-CN': '自定义操作项',
          },
        },
        name: 'action',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'bordered',
            'zh-CN': '边框类型',
          },
          tip: 'bordered | border type of Alert',
        },
        name: 'bordered',
        description: 'border type of Alert',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'none',
                value: 'none',
              },
              {
                label: 'dashed',
                value: 'dashed',
              },
              {
                label: 'solid',
                value: 'solid',
              },
            ],
            options: [
              {
                label: 'none',
                value: 'none',
              },
              {
                label: 'dashed',
                value: 'dashed',
              },
              {
                label: 'solid',
                value: 'solid',
              },
            ],
          },
          initialValue: 'none',
        },
      },
    ],
    supports: {
      loop: true,
      condition: true,
      events: [
        {
          name: 'afterClose',
          description: 'Trigger when animation ending of Alert',
          template:
            "afterClose(${extParams}){\n// Trigger when animation ending of Alert\nconsole.log('afterClose');}",
        },
        {
          name: 'onClose',
          description: 'Callback when close Alert',
          template:
            "onClose(event, ${extParams}){\n// Callback when close Alert\nconsole.log('onClose', event);}",
        },
        {
          name: 'onMouseEnter',
          description: 'onMouseEnter',
          template:
            "onMouseEnter(event, ${extParams}){\n// onMouseEnter \nconsole.log('onMouseEnter', event);}",
        },
        {
          name: 'onMouseLeave',
          description: 'onMouseLeave',
          template:
            "onMouseLeave(event, ${extParams}){\n// onMouseLeave \nconsole.log('onMouseLeave', event);}",
        },
        {
          name: 'onClick',
          description: 'onClick',
          template: "onClick(event, ${extParams}){\n// onClick \nconsole.log('onClick', event);}",
        },
      ],
      style: true,
      className: true,
    },
    component: {},
  },
  category: '反馈',
};

export const AlertMeta = {
  ...AlertMetaInfo,
  snippets: AlertSnippets,
};
