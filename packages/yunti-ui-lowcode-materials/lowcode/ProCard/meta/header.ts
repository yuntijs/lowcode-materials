import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { CLASS_NAME_PROP, STYLE_ONLY_CSS_CODE_PROP, Setters } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';

// import { ProCardHeaderSnippets } from '../snippets';

export const ProCardHeaderMeta: IPublicTypeComponentMetadata = {
  title: 'ProCardHeader',
  componentName: 'ProCard.Header',
  category: '数据展示',
  // snippets: ProCardHeaderSnippets,
  priority: getPriority('ProCard.Header'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProCard',
    destructuring: true,
    subName: 'Header',
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
            name: 'title',
            title: {
              label: '标题',
            },
            defaultValue: '我是卡片标题',
            setter: Setters.StringSetter,
          },
          {
            name: 'description',
            title: {
              label: '描述',
            },
            defaultValue: '我是描述',
            setter: Setters.StringSetter,
          },
          {
            name: 'divider',
            title: {
              label: '分割线',
              tip: '控制 header 与 content 的分割线',
            },
            defaultValue: true,
            setter: Setters.BoolSetter,
          },
          {
            name: 'icon',
            title: {
              label: '图标',
            },
            setter: {
              ...Setters.ObjectSetter,
              props: {
                config: {
                  items: [
                    {
                      name: 'shape',
                      title: {
                        label: '形状',
                      },
                      setter: {
                        ...Setters.RadioGroupSetter,
                        props: {
                          options: ['circle', 'square'],
                        },
                        defaultValue: 'square',
                      },
                    },
                    {
                      name: 'src',
                      title: {
                        label: '地址',
                        tip: '图标的资源地址或者图片元素',
                      },
                      isRequired: true,
                      setter: {
                        ...Setters.MixedSetter,
                        props: {
                          setters: [Setters.StringSetter, Setters.SlotSetter],
                        },
                      },
                    },
                    CLASS_NAME_PROP,
                    STYLE_ONLY_CSS_CODE_PROP,
                  ],
                },
              },
            },
          },
        ],
      },
      {
        name: 'extra',
        title: {
          label: '右侧扩展区域',
        },
        setter: {
          ...Setters.ObjectSetter,
          props: {
            config: {
              items: [
                {
                  name: 'menu',
                  title: {
                    label: '菜单',
                  },
                  setter: {
                    ...Setters.ObjectSetter,
                    props: {
                      config: {
                        items: [
                          {
                            name: 'items',
                            title: {
                              label: '扩展区域',
                            },
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
                                            label: '名称',
                                          },
                                          isRequired: true,
                                          defaultValue: '名称',
                                          setter: Setters.StringSetter,
                                        },
                                        {
                                          name: 'danger',
                                          title: {
                                            label: '危险按钮',
                                          },
                                          setter: Setters.BoolSetter,
                                        },
                                        {
                                          name: 'disabled',
                                          title: {
                                            label: '禁用',
                                          },
                                          setter: Setters.BoolSetter,
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                            },
                          },
                          {
                            name: 'onClick',
                            title: {
                              label: '点击事件',
                            },
                            setter: {
                              ...Setters.FunctionSetter,
                              props: {
                                template: `onClick({ item, key, keyPath, domEvent}){\n\n}\n`,
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              ],
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
      isContainer: false,
    },
  },
};
