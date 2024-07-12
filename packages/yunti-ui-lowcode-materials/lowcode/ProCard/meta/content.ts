import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS, getPriority } from '../../utils';

// import { ProCardContentSnippets } from '../snippets';

export const ProCardContentMeta: IPublicTypeComponentMetadata = {
  title: 'ProCardContent',
  componentName: 'ProCard.Content',
  category: '数据展示',
  // snippets: ProCardContentSnippets,
  priority: getPriority('ProCard.Content'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProCard',
    destructuring: true,
    subName: 'Content',
  },
  configure: {
    props: [...COMMON_CONFIGURE_PROPS],
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
