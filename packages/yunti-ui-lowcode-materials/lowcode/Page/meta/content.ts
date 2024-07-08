import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { Setters } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';
import { PageContentSnippets } from '../snippets';

export const PageContentMeta: IPublicTypeComponentMetadata = {
  title: 'PageContent',
  componentName: 'Page.Content',
  category: '布局',
  snippets: PageContentSnippets,
  priority: getPriority('Page.Content'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Page',
    destructuring: true,
    subName: 'Content',
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
            name: 'vertical',
            title: {
              label: '垂直布局',
            },
            defaultValue: true,
            setter: Setters.BoolSetter,
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
