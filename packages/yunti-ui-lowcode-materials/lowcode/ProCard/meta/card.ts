import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { Setters } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';
import { ProCardSnippets } from '../snippets';

export const ProCardMeta: IPublicTypeComponentMetadata = {
  title: 'ProCard',
  componentName: 'ProCard',
  category: '数据展示',
  snippets: ProCardSnippets,
  priority: getPriority('ProCard'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProCard',
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
            name: 'bordered',
            title: {
              label: '边框',
              tip: '是否有边框',
            },
            defaultValue: false,
            setter: Setters.BoolSetter,
          },
          {
            name: 'hoverable',
            title: {
              label: '浮起',
              tip: '鼠标移过时可浮起',
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
      isContainer: true,
    },
  },
};
