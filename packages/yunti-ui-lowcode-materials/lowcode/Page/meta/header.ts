import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { CLASS_NAME_PROP, STYLE_ONLY_CSS_CODE_PROP, Setters } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';
import { PageHeaderSnippets } from '../snippets';

export const PageHeaderMeta: IPublicTypeComponentMetadata = {
  title: 'PageHeader',
  componentName: 'Page.Header',
  category: '布局',
  snippets: PageHeaderSnippets,
  priority: getPriority('Page.Header'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Page',
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
            defaultValue: '我是页面标题',
            setter: Setters.StringSetter,
          },
          {
            name: 'subTitle',
            title: {
              label: '副标题',
              tip: '副标题或描述',
            },
            defaultValue: '我是副标题',
            setter: Setters.StringSetter,
          },
          {
            name: 'status',
            title: {
              label: '状态',
            },
            setter: {
              ...Setters.ObjectSetter,
              props: {
                config: {
                  items: [
                    {
                      name: 'status',
                      title: {
                        label: '状态标识',
                      },
                      isRequired: true,
                      setter: {
                        ...Setters.SelectSetter,
                        props: {
                          options: ['success', 'processing', 'error', 'default', 'warning'],
                        },
                      },
                    },
                    {
                      name: 'text',
                      title: {
                        label: '状态描述',
                      },
                      isRequired: true,
                      setter: {
                        ...Setters.MixedSetter,
                        props: {
                          setters: [Setters.StringSetter, Setters.SlotSetter],
                        },
                      },
                    },
                    {
                      name: 'title',
                      title: {
                        label: '状态提示',
                      },
                      setter: Setters.StringSetter,
                    },
                    {
                      name: 'href',
                      title: {
                        label: '链接',
                        tip: '链接的目的地，不能和 path 共用',
                      },
                      setter: Setters.StringSetter,
                    },
                  ],
                },
              },
            },
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
          {
            name: 'descriptions',
            title: {
              label: '属性列表',
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
                          name: 'text',
                          title: {
                            label: '文本描述',
                          },
                          isRequired: true,
                          defaultValue: '文本描述',
                          setter: {
                            ...Setters.MixedSetter,
                            props: {
                              setters: [Setters.StringSetter, Setters.SlotSetter],
                            },
                          },
                        },
                        {
                          name: 'icon',
                          title: {
                            label: '图标',
                          },
                          isRequired: false,
                          defaultValue: {},
                          setter: {
                            ...Setters.ObjectSetter,
                            props: {
                              config: {
                                items: [
                                  {
                                    name: 'content',
                                    title: {
                                      label: '图标内容',
                                    },
                                    isRequired: true,
                                    setter: {
                                      ...Setters.MixedSetter,
                                      props: {
                                        setters: [Setters.StringSetter, Setters.SlotSetter],
                                      },
                                    },
                                  },
                                  {
                                    name: 'tooltip',
                                    title: {
                                      label: '图标提示',
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
            },
          },
          {
            name: 'extraContent',
            title: {
              label: '按钮组',
            },
            setter: {
              ...Setters.ObjectSetter,
              props: {
                config: {
                  items: [
                    {
                      name: 'items',
                      title: {
                        label: '按钮组',
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
                                  {
                                    name: 'loading',
                                    title: {
                                      label: '加载中',
                                    },
                                    setter: Setters.BoolSetter,
                                  },
                                  {
                                    name: 'type',
                                    title: {
                                      label: '类型',
                                    },
                                    setter: {
                                      ...Setters.SelectSetter,
                                      props: {
                                        options: ['default', 'primary', 'dashed', 'link', 'text'],
                                      },
                                    },
                                  },
                                  {
                                    name: 'icon',
                                    title: {
                                      label: '图标',
                                    },
                                    isRequired: false,
                                    setter: Setters.SlotSetter,
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
                          template: `onClick(key, e){\n\n}\n`,
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            name: 'bordered',
            title: {
              label: '边框',
            },
            defaultValue: false,
            setter: Setters.BoolSetter,
          },
          {
            name: 'divider',
            title: {
              label: '分割线',
              tip: '控制 header 与 content 的分割线，当 bordered 为 true 时，divider 自动设置为 false',
            },
            defaultValue: true,
            setter: Setters.BoolSetter,
          },
        ],
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
