import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { Setters } from '../../../../shared/src/setters';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';
import { PageTitleSnippets } from '../snippets';

export const PageTitleMeta: IPublicTypeComponentMetadata = {
  title: 'PageTitle',
  componentName: 'Page.Title',
  category: '布局',
  snippets: PageTitleSnippets,
  priority: getPriority('Page.Title'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'Page',
    destructuring: true,
    subName: 'Title',
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
            name: 'children',
            title: {
              label: '标题',
            },
            defaultValue: '',
            setter: [Setters.I18nSetter, Setters.StringSetter, Setters.SlotSetter],
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
  },
};
