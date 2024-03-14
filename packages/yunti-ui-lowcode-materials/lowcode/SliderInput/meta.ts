import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { Setters } from '../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../utils';
import { SliderInputSnippets } from './snippets';

export const SliderInputMeta: IPublicTypeComponentMetadata = {
  title: 'SliderInput',
  componentName: 'SliderInput',
  category: '数据输入',
  snippets: SliderInputSnippets,
  priority: getPriority('SliderInput'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'SliderInput',
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
            name: 'min',
            title: {
              label: '最小值',
            },
            defaultValue: 0,
            setter: Setters.NumberSetter,
          },
          {
            name: 'max',
            title: {
              label: '最大值',
            },
            defaultValue: 100,
            setter: Setters.NumberSetter,
          },
          {
            name: 'step',
            title: {
              label: '步长',
              tip: '每次改变步数，可以为小数',
            },
            defaultValue: 1,
            setter: Setters.NumberSetter,
          },
          {
            name: 'addonAfter',
            title: {
              label: '后置标签',
              tip: '带标签的 input，设置后置标签',
            },
            setter: Setters.StringSetter,
          },
          {
            name: 'addonBefore',
            title: {
              label: '前置标签',
              tip: '带标签的 input，设置前置标签',
            },
            setter: Setters.StringSetter,
          },
          {
            name: 'placeholder',
            title: {
              label: '占位符',
            },
            setter: Setters.StringSetter,
          },
          {
            name: 'defaultValue',
            title: {
              label: '默认值',
            },
            setter: Setters.NumberSetter,
          },
          {
            name: 'value',
            title: {
              label: 'value 值',
            },
            setter: Setters.NumberSetter,
          },
        ],
      },
      {
        title: '高级配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'gutter',
            title: {
              label: '栅格间隔',
              tip: '栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]',
            },
            setter: Setters.NumberSetter,
          },
          {
            name: 'sliderCol',
            title: {
              label: '滑动条布局',
              tip: 'label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}',
              docUrl: 'https://ant.design/components/grid#row',
            },
            setter: Setters.MixedSetter,
          },
          {
            name: 'inputCol',
            title: {
              label: '输入框布局',
              tip: '需要为输入框设置布局样式时，使用该属性，用法同 sliderCol',
              docUrl: 'https://ant.design/components/grid#row',
            },
            setter: Setters.MixedSetter,
          },
          {
            name: 'sliderProps',
            title: {
              label: '滑动条属性',
              tip: '这里可以指定滑动条的所有属性',
              docUrl: 'https://ant.design/components/slider#api',
            },
            setter: Setters.MixedSetter,
          },
          {
            name: 'inputProps',
            title: {
              label: '输入框属性',
              tip: '这里可以指定输入框的所有属性',
              docUrl: 'https://ant.design/components/input-number#api',
            },
            setter: Setters.MixedSetter,
          },
        ],
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
      events: [
        {
          name: 'onChange',
          description: '输入时触发',
          template: `
  onChange(input, event) {
    console.log(input, event);
  }
`,
        },
      ],
    },
  },
};
