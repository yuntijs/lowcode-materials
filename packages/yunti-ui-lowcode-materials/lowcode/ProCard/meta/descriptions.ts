import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { STYLE_ONLY_CSS_CODE_PROP, Setters } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';

export const ProCardDescriptionsMeta: IPublicTypeComponentMetadata = {
  title: 'ProCardDescriptions',
  componentName: 'ProCard.Descriptions',
  category: '数据展示',
  priority: getPriority('ProCard.Descriptions'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProCard',
    destructuring: true,
    subName: 'Descriptions',
  },
  configure: {
    props: [
      ...COMMON_CONFIGURE_PROPS,
      {
        name: 'colon',
        title: {
          label: '冒号',
        },
        setter: Setters.BoolSetter,
        defaultValue: false,
      },
      {
        name: 'column',
        title: {
          label: 'item 数量',
        },
        setter: Setters.NumberSetter,
        defaultValue: 2,
      },
      {
        name: 'items',
        title: {
          label: '描述列表',
        },
        defaultValue: [],
        setter: {
          ...Setters.ArraySetter,
          props: {
            itemSetter: {
              ...Setters.ObjectSetter,
              props: {
                config: {
                  items: [
                    {
                      name: 'key',
                      title: {
                        label: '唯一标识',
                      },
                      isRequired: true,
                      defaultValue: 'key',
                      setter: Setters.StringSetter,
                    },
                    {
                      name: 'label',
                      title: {
                        label: '描述',
                      },
                      isRequired: true,
                      defaultValue: '描述',
                      setter: [Setters.StringSetter, Setters.SlotSetter],
                    },
                    {
                      name: 'children',
                      title: {
                        label: '内容',
                      },
                      isRequired: true,
                      setter: Setters.SlotSetter,
                      defaultValue: {
                        type: 'JSSlot',
                        value: [],
                      },
                    },
                    {
                      ...STYLE_ONLY_CSS_CODE_PROP,
                      name: 'labelStyle',
                      title: {
                        label: '描述样式',
                      },
                    },
                    {
                      ...STYLE_ONLY_CSS_CODE_PROP,
                      name: 'contentStyle',
                      title: {
                        label: '内容样式',
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    ],
    supports: {
      loop: false,
      condition: true,
      style: true,
      events: [],
    },
    component: {
      isContainer: true,
    },
  },
};
