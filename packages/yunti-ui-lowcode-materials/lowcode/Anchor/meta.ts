import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS } from '../utils';
import { AnchorSnippets } from './snippets';

const AnchorMetaInfo: IPublicTypeComponentMetadata = {
  componentName: 'Anchor',
  title: 'Anchor',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Anchor',
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
            'en-US': 'children',
            'zh-CN': 'children',
          },
          tip: 'children | @deprecated Please use `items` instead.',
        },
        name: 'children',
        description: '@deprecated Please use `items` instead.',
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
            'en-US': 'offsetTop',
            'zh-CN': '距离窗口顶部达到指定偏移量后触发',
          },
        },
        name: 'offsetTop',
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
            'en-US': 'bounds',
            'zh-CN': '锚点区域边界',
          },
        },
        name: 'bounds',
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
            'en-US': 'affix',
            'zh-CN': '固定模式',
          },
        },
        name: 'affix',
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
            'en-US': 'showInkInFixed',
            'zh-CN': '是否显示小方块',
          },
        },
        name: 'showInkInFixed',
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
            'en-US': 'getContainer',
            'zh-CN': '指定滚动的容器',
          },
        },
        name: 'getContainer',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'getCurrentAnchor',
            'zh-CN': '自定义高亮的锚点',
          },
          tip: 'getCurrentAnchor | Return customize highlight anchor',
        },
        name: 'getCurrentAnchor',
        description: 'Return customize highlight anchor',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'targetOffset',
            'zh-CN': '锚点滚动偏移量',
          },
          tip: "targetOffset | Scroll to target offset value, if none, it's offsetTop prop value or 0.",
        },
        name: 'targetOffset',
        description: "Scroll to target offset value, if none, it's offsetTop prop value or 0.",
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
            'en-US': 'items',
            'zh-CN': 'items',
          },
        },
        name: 'items',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      title: {
                        label: {
                          'type': 'i18n',
                          'en-US': 'key',
                          'zh-CN': 'key',
                        },
                      },
                      name: 'key',
                      setter: {
                        componentName: 'MixedSetter',
                        props: {
                          setters: [
                            {
                              componentName: 'StringSetter',
                              isRequired: false,
                              initialValue: '',
                            },
                            {
                              componentName: 'NumberSetter',
                              isRequired: false,
                              initialValue: 0,
                            },
                          ],
                        },
                        isRequired: true,
                      },
                    },
                    {
                      title: {
                        label: {
                          'type': 'i18n',
                          'en-US': 'href',
                          'zh-CN': 'href',
                        },
                      },
                      name: 'href',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                      },
                    },
                    {
                      title: {
                        label: {
                          'type': 'i18n',
                          'en-US': 'title',
                          'zh-CN': 'title',
                        },
                      },
                      name: 'title',
                      setter: {
                        componentName: 'StringSetter',
                        isRequired: true,
                      },
                    },
                    {
                      title: {
                        label: {
                          'type': 'i18n',
                          'en-US': 'children',
                          'zh-CN': 'children',
                        },
                      },
                      name: 'children',
                      setter: {
                        componentName: 'ArraySetter',
                        props: {
                          itemSetter: {
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
                        },
                        initialValue: [],
                      },
                    },
                  ],
                  extraSetter: {
                    componentName: 'MixedSetter',
                    isRequired: false,
                    props: {},
                  },
                },
              },
            },
          },
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'direction',
            'zh-CN': '方向',
          },
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'vertical',
                value: 'vertical',
              },
              {
                label: 'horizontal',
                value: 'horizontal',
              },
            ],
            options: [
              {
                label: 'vertical',
                value: 'vertical',
              },
              {
                label: 'horizontal',
                value: 'horizontal',
              },
            ],
          },
          initialValue: 'vertical',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'replace',
            'zh-CN': '替换 href',
          },
        },
        name: 'replace',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
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
          description: '点击事件',
          template: "onClick(e, link, ${extParams}){ \nconsole.log('onClick', e, link);}",
        },
        {
          name: 'onChange',
          description: '监听锚点链接改变',
          template:
            "onChange(currentActiveLink, ${extParams}){ \nconsole.log('onChange', currentActiveLink);}",
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
  category: '导航',
};

export const AnchorMeta = {
  ...AnchorMetaInfo,
  snippets: AnchorSnippets,
};
