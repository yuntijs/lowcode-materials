import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { Setters } from '../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../utils';
import { ButtonSnippets } from './snippets';

export const ButtonMeta: IPublicTypeComponentMetadata = {
  componentName: 'Button',
  title: 'Button',
  docUrl: '',
  screenshot: '',
  snippets: ButtonSnippets,
  priority: getPriority('Button'),
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
        title: '常用配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'children',
            title: {
              label: '内容',
              tip: 'children | 内容',
            },
            setter: Setters.SlotSetter,
            // setter: [
            //   Setters.I18nSetter,
            //   Setters.StringSetter,
            //   Setters.SlotSetter,
            // ],
          },
          {
            name: 'type',
            title: { label: '类型', tip: 'type | 设置按钮类型' },
            setter: {
              ...Setters.SelectSetter,
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '主按钮',
                    value: 'primary',
                  },
                  {
                    title: '链接按钮',
                    value: 'link',
                  },
                  {
                    title: '类文本按钮',
                    value: 'text',
                  },
                  {
                    title: '虚线框按钮',
                    value: 'dashed',
                  },
                ],
              },
            },
          },
          {
            name: 'href',
            title: {
              label: '跳转地址',
              tip: 'href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
            },
            setter: Setters.StringSetter,
          },
          {
            name: 'target',
            title: {
              label: 'Target',
              tip: 'target | 相当于 a 链接的 target 属性，href 存在时生效',
            },
            setter: Setters.StringSetter,
            // setter: [
            //   {
            //     ...Setters.SelectSetter,
            //     props: {
            //       options: [
            //         {
            //           title: '本窗口跳转',
            //           value: '_self'
            //         },
            //         {
            //           title: '打开新标签页',
            //           value: '_blank'
            //         },
            //         {
            //           title: '父窗口跳转',
            //           value: '_parent'
            //         },
            //         {
            //           title: '顶层窗口跳转',
            //           value: '_top'
            //         }
            //       ]
            //     }
            //   },
            //   Setters.StringSetter,
            // ],
            condition: target => !!target.parent.getPropValue('href')?.trim(),
          },
          {
            name: 'danger',
            title: { label: '危险按钮', tip: 'danger | 设置危险按钮' },
            setter: Setters.BoolSetter,
            defaultValue: false,
          },
          {
            name: 'ghost',
            title: { label: '幽灵属性', tip: 'ghost | 幽灵属性，使按钮背景透明' },
            setter: Setters.BoolSetter,
            defaultValue: false,
          },
          {
            name: 'size',
            title: { label: '尺寸', tip: 'size | 设置按钮大小' },
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                options: [
                  {
                    title: '大',
                    value: 'large',
                  },
                  {
                    title: '中',
                    value: 'middle',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
          },
          {
            name: 'shape',
            title: {
              label: '形状',
              tip: 'shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设',
            },
            defaultValue: 'default',
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '圆形',
                    value: 'circle',
                  },
                  {
                    title: '圆角',
                    value: 'round',
                  },
                ],
              },
            },
          },
          {
            name: 'icon',
            title: { label: '图标', tip: 'icon | 设置按钮的图标组件' },
            setter: Setters.SlotSetter,
          },
          {
            name: 'block',
            title: {
              label: '自适应',
              tip: 'block | 将按钮宽度调整为其父宽度的选项',
            },
            setter: Setters.BoolSetter,
          },
        ],
      },
      {
        title: '状态',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'loading',
            title: { label: '载入状态', tip: 'loading | 设置按钮载入状态' },
            setter: Setters.BoolSetter,
          },
          {
            name: 'disabled',
            title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
            setter: Setters.BoolSetter,
          },
        ],
      },
      {
        title: '高级配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'htmlType',
            title: {
              label: {
                'type': 'i18n',
                'en-US': 'htmlType',
                'zh-CN': '原生 type 值',
              },
            },
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                options: [
                  {
                    label: 'button',
                    value: 'button',
                  },
                  {
                    label: 'submit',
                    value: 'submit',
                  },
                  {
                    label: 'reset',
                    value: 'reset',
                  },
                ],
              },
              initialValue: 'button',
            },
          },
          {
            title: {
              label: {
                'type': 'i18n',
                'en-US': 'autoInsertSpace',
                'zh-CN': '两个汉字之间的空格',
              },
            },
            name: 'autoInsertSpace',
            setter: {
              ...Setters.BoolSetter,
              isRequired: false,
              initialValue: true,
            },
          },
          {
            title: {
              label: {
                'type': 'i18n',
                'en-US': 'icon position',
                'zh-CN': '图标位置',
              },
            },
            name: 'iconPosition',
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
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
            condition: target => !!target.parent.getPropValue('icon')?.value,
          },
        ],
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
