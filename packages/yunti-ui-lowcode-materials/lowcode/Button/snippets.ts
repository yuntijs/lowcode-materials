import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const ButtonSnippets: IPublicTypeSnippet[] = [
  {
    title: '主按钮',
    schema: {
      componentName: 'Button',
      props: {
        __component_name: 'Button',
        type: 'primary',
        children: '创建',
      },
    },
  },
  {
    title: '次级按钮',
    schema: {
      componentName: 'Button',
      props: {
        __component_name: 'Button',
        children: '刷新',
      },
    },
  },
  {
    title: '危险按钮',
    schema: {
      componentName: 'Button',
      props: {
        __component_name: 'Button',
        danger: true,
        children: '删除',
      },
    },
  },
];
