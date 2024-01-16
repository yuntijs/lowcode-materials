import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS, getPriority } from '../utils';

const componentName = 'Breadcrumb';
const BreadcrumbMeta: IPublicTypeComponentMetadata = {
  componentName,
  category: '数据展示',
  title: '面包屑',
  priority: getPriority(componentName),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: componentName,
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      ...COMMON_CONFIGURE_PROPS,
      {
        name: 'items',
        title: '列表项',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: '标题',
                      initialValue: 'Home',
                      propType: {
                        type: 'oneOfType',
                        value: ['node', 'string'],
                      },
                      setter: ['StringSetter', 'SlotSetter', 'VariableSetter', 'I18nSetter'],
                    },
                    {
                      name: 'href',
                      title: '跳转',
                      initialValue: '/',
                      propType: {
                        type: 'oneOfType',
                        value: ['string'],
                      },
                      setter: ['StringSetter', 'VariableSetter'],
                    },
                  ],
                },
              },
            },
          },
        },
      },
      {
        name: 'separator',
        title: {
          label: '分隔符',
          tip: '要显示的分隔符',
        },
        initialValue: '/',
        propType: {
          type: 'oneOfType',
          value: ['node', 'string'],
        },
        setter: ['StringSetter', 'SlotSetter', 'VariableSetter'],
      },
      {
        name: 'rootClassName',
        title: { label: '类名' },
        setter: ['StringSetter', 'VariableSetter'],
      },
    ],
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
      loop: true,
      condition: true,
      events: [],
    },
    advanced: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '面包屑',
    schema: {
      componentName: 'Breadcrumb',
      props: {
        __component_name: 'Breadcrumb',
        items: [
          {
            title: 'Home',
          },
          {
            title: 'Application Center',
          },
          {
            title: 'Application List',
          },
          {
            title: 'An Application',
          },
        ],
      },
    },
  },
];

const meta = {
  ...BreadcrumbMeta,
  snippets,
};

export default meta;
