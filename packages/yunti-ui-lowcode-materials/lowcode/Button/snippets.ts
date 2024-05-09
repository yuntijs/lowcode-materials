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
        icon: {
          type: 'JSSlot',
          value: [],
        },
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
        icon: {
          type: 'JSSlot',
          value: [],
        },
      },
    },
  },
  {
    title: '删除按钮',
    schema: {
      componentName: 'Button',
      props: {
        __component_name: 'Button',
        type: 'dashed',
        icon: {
          type: 'JSSlot',
          value: [],
        },
      },
    },
  },
];
