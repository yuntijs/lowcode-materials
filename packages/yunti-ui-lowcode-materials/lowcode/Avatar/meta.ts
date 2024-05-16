import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS } from '../utils';
import { AvatarSnippets } from './snippets';

const AvatarMetaInfo: IPublicTypeComponentMetadata = {
  componentName: 'Avatar',
  title: 'Avatar',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Avatar',
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
            'en-US': 'shape',
            'zh-CN': 'shape',
          },
          tip: 'shape | Shape of avatar, options: `circle`, `square`',
        },
        name: 'shape',
        description: 'Shape of avatar, options: `circle`, `square`',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'circle',
                value: 'circle',
              },
              {
                label: 'square',
                value: 'square',
              },
            ],
            options: [
              {
                label: 'circle',
                value: 'circle',
              },
              {
                label: 'square',
                value: 'square',
              },
            ],
          },
          initialValue: 'circle',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'size',
            'zh-CN': 'size',
          },
        },
        name: 'size',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
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
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'small',
                      value: 'small',
                    },
                    {
                      label: 'large',
                      value: 'large',
                    },
                    {
                      label: 'default',
                      value: 'default',
                    },
                  ],
                  options: [
                    {
                      label: 'small',
                      value: 'small',
                    },
                    {
                      label: 'large',
                      value: 'large',
                    },
                    {
                      label: 'default',
                      value: 'default',
                    },
                  ],
                },
                initialValue: 'small',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'gap',
            'zh-CN': 'gap',
          },
        },
        name: 'gap',
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
            'en-US': 'src',
            'zh-CN': 'src',
          },
          tip: 'src | Src of image avatar',
        },
        name: 'src',
        description: 'Src of image avatar',
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
            'en-US': 'srcSet',
            'zh-CN': 'srcSet',
          },
          tip: 'srcSet | Srcset of image avatar',
        },
        name: 'srcSet',
        description: 'Srcset of image avatar',
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
            'en-US': 'draggable',
            'zh-CN': 'draggable',
          },
        },
        name: 'draggable',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'true',
                      value: 'true',
                    },
                    {
                      label: 'false',
                      value: 'false',
                    },
                  ],
                  options: [
                    {
                      label: 'true',
                      value: 'true',
                    },
                    {
                      label: 'false',
                      value: 'false',
                    },
                  ],
                },
                initialValue: 'true',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'icon',
            'zh-CN': 'icon',
          },
          tip: 'icon | Icon to be used in avatar',
        },
        name: 'icon',
        description: 'Icon to be used in avatar',
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
            'en-US': 'alt',
            'zh-CN': 'alt',
          },
        },
        name: 'alt',
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
            'en-US': 'crossOrigin',
            'zh-CN': 'crossOrigin',
          },
        },
        name: 'crossOrigin',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'anonymous',
                value: 'anonymous',
              },
              {
                label: 'use-credentials',
                value: 'use-credentials',
              },
            ],
            options: [
              {
                label: 'anonymous',
                value: 'anonymous',
              },
              {
                label: 'use-credentials',
                value: 'use-credentials',
              },
            ],
          },
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'onError',
            'zh-CN': 'onError',
          },
        },
        name: 'onError',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'ref',
            'zh-CN': 'ref',
          },
        },
        name: 'ref',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter',
              },
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
            ],
          },
        },
      },
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
          name: 'onClick',
          description: 'onClick',
          template: "onClick(e,${extParams}){ \nconsole.log('onClick,e);}",
        },
      ],
    },
    component: {},
  },
  category: '数据展示',
};

export const AvatarMeta = {
  ...AvatarMetaInfo,
  snippets: AvatarSnippets,
};
