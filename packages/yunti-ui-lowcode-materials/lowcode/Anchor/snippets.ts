import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const AnchorSnippets: IPublicTypeSnippet[] = [
  {
    title: '锚点(Anchor)',
    screenshot: '',
    schema: {
      componentName: 'Anchor',
      props: {
        __component_name: 'Anchor',
        items: [
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ],
      },
    },
  },
];
