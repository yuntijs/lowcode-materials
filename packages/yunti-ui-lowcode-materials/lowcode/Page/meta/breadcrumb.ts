import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { Setters } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';
import { PageBreadcrumbSnippets } from '../snippets';

export const PageBreadcrumbMeta: IPublicTypeComponentMetadata = {
  title: 'PageBreadcrumb',
  componentName: 'Page.Breadcrumb',
  category: '布局',
  snippets: PageBreadcrumbSnippets,
  priority: getPriority('Page.Breadcrumb'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Page',
    destructuring: true,
    subName: 'Breadcrumb',
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
            name: 'items',
            title: {
              label: '路由栈',
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
                          name: 'title',
                          title: {
                            label: '名称',
                          },
                          isRequired: true,
                          defaultValue: '名称',
                          setter: Setters.StringSetter,
                        },
                        {
                          name: 'path',
                          title: {
                            label: '拼接路径',
                            tip: '每一层都会拼接前一个 path 信息，不能和 href 共用',
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
            },
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
      {
        title: '高级配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'separator',
            title: {
              label: '分隔符',
            },
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
