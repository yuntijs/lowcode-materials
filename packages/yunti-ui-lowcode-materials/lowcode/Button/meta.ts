import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS } from '../utils';
import { ButtonSnippets } from './snippets';

const ButtonMetaInfo: IPublicTypeComponentMetadata = {
  componentName: 'Button',
  title: 'Button',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Button',
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
            'en-US': 'href',
            'zh-CN': '跳转的地址',
          },
        },
        name: 'href',
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
            'en-US': 'htmlType',
            'zh-CN': '原生 type 值',
          },
        },
        name: 'htmlType',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'submit',
                value: 'submit',
              },
              {
                label: 'reset',
                value: 'reset',
              },
              {
                label: 'button',
                value: 'button',
              },
            ],
            options: [
              {
                label: 'submit',
                value: 'submit',
              },
              {
                label: 'reset',
                value: 'reset',
              },
              {
                label: 'button',
                value: 'button',
              },
            ],
          },
          initialValue: 'submit',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'type',
            'zh-CN': '类型',
          },
        },
        name: 'type',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'link',
                value: 'link',
              },
              {
                label: 'text',
                value: 'text',
              },
              {
                label: 'default',
                value: 'default',
              },
              {
                label: 'primary',
                value: 'primary',
              },
              {
                label: 'dashed',
                value: 'dashed',
              },
            ],
            options: [
              {
                label: 'link',
                value: 'link',
              },
              {
                label: 'text',
                value: 'text',
              },
              {
                label: 'default',
                value: 'default',
              },
              {
                label: 'primary',
                value: 'primary',
              },
              {
                label: 'dashed',
                value: 'dashed',
              },
            ],
          },
          initialValue: 'link',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'icon',
            'zh-CN': '图标',
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
            'en-US': 'shape',
            'zh-CN': '形状',
          },
        },
        name: 'shape',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'circle',
                value: 'circle',
              },
              {
                label: 'default',
                value: 'default',
              },
              {
                label: 'round',
                value: 'round',
              },
            ],
            options: [
              {
                label: 'circle',
                value: 'circle',
              },
              {
                label: 'default',
                value: 'default',
              },
              {
                label: 'round',
                value: 'round',
              },
            ],
          },
          initialValue: 'default',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'size',
            'zh-CN': '大小',
          },
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'middle',
                value: 'middle',
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
            options: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'middle',
                value: 'middle',
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
          },
          initialValue: 'small',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'disabled',
            'zh-CN': '禁用',
          },
        },
        name: 'disabled',
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
            'en-US': 'loading',
            'zh-CN': '加载中',
          },
        },
        name: 'loading',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
            ],
          },
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
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'ghost',
            'zh-CN': '幽灵属性',
          },
        },
        name: 'ghost',
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
            'en-US': 'danger',
            'zh-CN': '危险',
          },
        },
        name: 'danger',
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
            'en-US': 'block',
            'zh-CN': '按钮宽度调整为其父宽度的选项',
          },
        },
        name: 'block',
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
            'en-US': 'target',
            'zh-CN': '相当于 a 链接的 target 属性，href 存在时生效',
          },
        },
        name: 'target',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
              {
                componentName: 'SelectSetter',
                props: {
                  dataSource: [
                    {
                      label: '_self',
                      value: '_self',
                    },
                    {
                      label: '_blank',
                      value: '_blank',
                    },
                    {
                      label: '_parent',
                      value: '_parent',
                    },
                    {
                      label: '_top',
                      value: '_top',
                    },
                  ],
                  options: [
                    {
                      label: '_self',
                      value: '_self',
                    },
                    {
                      label: '_blank',
                      value: '_blank',
                    },
                    {
                      label: '_parent',
                      value: '_parent',
                    },
                    {
                      label: '_top',
                      value: '_top',
                    },
                  ],
                },
                initialValue: '_self',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'autoInsertSpace',
            'zh-CN': '汉字之间有空格',
          },
        },
        name: 'autoInsertSpace',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: true,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'iconPosition',
            'zh-CN': '图标位置',
          },
        },
        name: 'iconPosition',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
            options: [
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
          },
          initialValue: 'start',
        },
      },
    ],
    supports: {
      loop: true,
      condition: true,
      className: true,
      style: true,
      events: [
        {
          name: 'onClick',
          description: '点击按钮时的回调',
          template: "onClick(e, ${extParams}){\n// 点击按钮时的回调 \nconsole.log('onChange', e);}",
        },
      ],
    },
    component: {},
  },
  category: '通用',
};

export const ButtonMeta = {
  ...ButtonMetaInfo,
  snippets: ButtonSnippets,
};
