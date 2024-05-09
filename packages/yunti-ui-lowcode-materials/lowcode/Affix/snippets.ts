import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const AffixSnippets: IPublicTypeSnippet[] = [
  {
    title: '固钉(Affix)',
    screenshot: '',
    schema: {
      componentName: 'Affix',
      props: {
        __component_name: 'Affix',
        offsetTop: 120,
        children: [
          {
            componentName: 'Button',
            props: {
              __component_name: 'Button',
              children: 'Affix Top',
            },
          },
        ],
      },
    },
  },
];
