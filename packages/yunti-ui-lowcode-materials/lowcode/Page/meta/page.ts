import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { Setters, getSimulatorRenderer } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';
import { PageSnippets } from '../snippets';

export const PageMeta: IPublicTypeComponentMetadata = {
  title: 'Page',
  componentName: 'Page',
  category: '布局',
  snippets: PageSnippets,
  priority: getPriority('Page'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Page',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      ...COMMON_CONFIGURE_PROPS,
      {
        title: '生命周期',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'sdkSwrFuncs',
            title: {
              label: '页面加载完成时',
              tip: '页面加载完成时执行的数据请求函数',
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
                          name: 'func',
                          propType: 'string',
                          description: '执行函数',
                          title: '调用函数',
                          isRequired: true,
                          // initialValue: ,
                          setter: _target => {
                            return {
                              componentName: 'SelectSetter',
                              props: {
                                showSearch: true,
                                options: Object.keys(
                                  // @Todo：这里不应该写死从 bff 中取
                                  getSimulatorRenderer()?.context?.utils?.bff || {}
                                )
                                  .filter(key => key.startsWith('use'))
                                  .map(value => ({
                                    title: '调用 ' + value,
                                    value,
                                  })),
                              },
                            };
                          },
                        },
                        {
                          name: 'params',
                          propType: 'object',
                          description: '函数的参数',
                          title: '参数',
                          setter: ['JsonSetter', 'VariableSetter'],
                          initialValue: {},
                        },
                        {
                          name: 'enableLocationSearch',
                          title: {
                            label: '列表查询',
                            tip: '开启后，函数的查询参数从 location.search 取值(key 为 _search)，函数 fetch 方法不再生效 ',
                          },
                          setter: ['BoolSetter', 'VariableSetter'],
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        ],
      },
      {
        title: 'mock 数据',
        display: 'block',
        type: 'group',
        items: [
          {
            name: '__mock_path',
            title: {
              label: '页面路由',
              tip: '当前页面的路由，例如 /apps/app-075kz/pages/page-6hcz8',
            },
            setter: Setters.StringSetter,
          },
        ],
      },
      {
        title: '常用配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'loading',
            title: {
              label: '加载中',
            },
            defaultValue: false,
            setter: Setters.BoolSetter,
          },
          {
            name: 'status',
            title: {
              label: '状态',
            },
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                options: ['403', '404', '500'],
              },
            },
          },
          {
            name: 'gap',
            title: {
              label: '间隙',
              tip: '设置网格之间的间隙',
            },
            defaultValue: 16,
            setter: Setters.NumberSetter,
          },
        ],
      },
      {
        title: '高级设置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'sdkInitFunc',
            title: {
              label: 'sdk 初始化函数',
              tip: '如果需要定制生成 sdk，可以指定全局工具中的一个函数作为初始化函数',
            },
            isRequired: false,
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'enabled',
                      propType: 'boolean',
                      title: '启用',
                      isRequired: true,
                      setter: ['BoolSetter'],
                    },
                    {
                      name: 'func',
                      propType: 'string',
                      description: '初始化函数',
                      title: '函数',
                      condition: target => {
                        return target.parent.getPropValue('enabled') === true;
                      },
                      setter: _target => {
                        return {
                          componentName: 'SelectSetter',
                          props: {
                            showSearch: true,
                            options: Object.keys(
                              (window as any).AliLowCodeEngine?.project?.simulator?.renderer
                                ?.context?.utils || {}
                            ).map(value => ({
                              title: value,
                              value,
                            })),
                          },
                        };
                      },
                    },
                    {
                      name: 'params',
                      propType: 'object',
                      description: '函数的参数',
                      title: '参数',
                      condition: target => {
                        return target.parent.getPropValue('enabled') === true;
                      },
                      setter: ['JsonSetter', 'VariableSetter'],
                      initialValue: {},
                    },
                  ],
                },
              },
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
      isContainer: true,
    },
  },
};
