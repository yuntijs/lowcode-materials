import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const ProCardHeaderSnippets: IPublicTypeSnippet[] = [
  {
    title: 'ProCard 头部',
    screenshot: '',
    schema: {
      componentName: 'ProCard.Header',
      props: {
        __component_name: 'ProCard.Header',
        title: '我是标题',
        description: '我是描述',
        divider: true,
        icon: {
          shape: 'square',
        },
        extra: {
          menu: {
            items: [
              { key: 'edit', label: '编辑' },
              { key: 'delete', label: '删除', danger: true },
            ],
          },
        },
      },
    },
  },
];

export const ProCarDescriptionsSnippets: IPublicTypeSnippet[] = [
  {
    title: 'ProCard 描述列表',
    screenshot: '',
    schema: {
      componentName: 'ProCard.Descriptions',
      props: {
        __component_name: 'ProCard.Descriptions',
        items: [
          {
            key: 'status',
            label: '状态',
            children: {
              type: 'JSSlot',
              value: [],
            },
          },
          {
            key: 'publishTime',
            label: '发布时间',
            children: {
              type: 'JSSlot',
              value: [],
            },
          },
        ],
      },
    },
  },
];

export const ProCarContentSnippets: IPublicTypeSnippet[] = [
  {
    title: 'ProCard 内容',
    screenshot: '',
    schema: {
      componentName: 'ProCard.Content',
      props: {
        __component_name: 'ProCard.Content',
        children: {
          type: 'JSSlot',
          value: [ProCarDescriptionsSnippets[0].schema],
        },
      },
    },
  },
];

export const ProCardSnippets: IPublicTypeSnippet[] = [
  {
    title: 'ProCard',
    screenshot: '',
    schema: {
      componentName: 'ProCard',
      props: {
        __component_name: 'ProCard',
        bordered: false,
        hoverable: true,
        children: {
          type: 'JSSlot',
          value: [ProCardHeaderSnippets[0].schema, ProCarContentSnippets[0].schema],
        },
      },
    },
  },
];
