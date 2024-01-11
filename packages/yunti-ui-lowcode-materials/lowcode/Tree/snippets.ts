import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const TreeSnippets: IPublicTypeSnippet[] = [
  {
    title: 'Tree',
    screenshot: '',
    schema: {
      componentName: 'Tree',
      props: {
        __component_name: 'Tree',
        treeData: [
          {
            title: 'parent 1',
            key: '0-0',
            children: [
              {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-0-0',
                    disableCheckbox: true,
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-1',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
];
