import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const AppSnippets: IPublicTypeSnippet[] = [
  {
    title: '包裹组件(App)',
    screenshot: '',
    schema: {
      componentName: 'App',
      props: {
        __component_name: 'App',
        children: [
          {
            componentName: 'Button',
            props: {
              __component_name: 'Button',
              children: 'App',
            },
          },
        ],
      },
    },
  },
];
