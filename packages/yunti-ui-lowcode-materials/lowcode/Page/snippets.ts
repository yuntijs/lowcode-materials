import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const PageTitleSnippets: IPublicTypeSnippet[] = [
  {
    title: '页面标题',
    screenshot: '',
    schema: {
      componentName: 'Page.Title',
      props: {
        __component_name: 'Page.Title',
        children: '页面标题',
      },
    },
  },
];

export const PageBreadcrumbSnippets: IPublicTypeSnippet[] = [
  {
    title: '详情页面包屑',
    screenshot: '',
    schema: {
      componentName: 'Page.Breadcrumb',
      props: {
        __component_name: 'Page.Breadcrumb',
        items: [
          {
            title: 'home',
            href: '/',
          },
          {
            title: '列表页',
            href: '/list',
          },
          {
            title: '详情页',
          },
        ],
      },
    },
  },
];

export const PageHeaderSnippets: IPublicTypeSnippet[] = [
  {
    title: '详情页头部',
    screenshot: '',
    schema: {
      componentName: 'Page.Header',
      props: {
        __component_name: 'Page.Header',
        title: '我是页面标题',
        subTitle: '我是副标题',
        icon: {
          src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        status: {
          status: 'success',
          text: '已发布',
          title: '发布于: 2024-07-08',
        },
        descriptions: [
          {
            text: '张萝卜',
          },
          {
            text: '2024-05-16 17:36:09',
          },
        ],
        extraContent: {
          items: [
            {
              key: 'edit',
              label: '编辑',
            },
            {
              key: 'delete',
              label: '删除',
              danger: true,
            },
            {
              key: 'test',
              label: '测试',
            },
          ],
        },
        bordered: false,
        divider: true,
      },
    },
  },
];

export const PageContentSnippets: IPublicTypeSnippet[] = [
  {
    title: '详情页内容',
    screenshot: '',
    schema: {
      componentName: 'Page.Content',
      props: {
        __component_name: 'Page.Content',
        vertical: true,
        gap: 20,
      },
    },
  },
];

export const PageSnippets: IPublicTypeSnippet[] = [
  {
    title: '列表页',
    screenshot: '',
    schema: {
      componentName: 'Page',
      props: {
        __component_name: 'Page',
        loading: false,
        gap: 16,
        children: {
          type: 'JSSlot',
          value: [PageTitleSnippets[0].schema, PageContentSnippets[0].schema],
        },
      },
    },
  },
  {
    title: '详情页',
    screenshot: '',
    schema: {
      componentName: 'Page',
      props: {
        __component_name: 'Page',
        loading: false,
        gap: 16,
        children: {
          type: 'JSSlot',
          value: [
            PageBreadcrumbSnippets[0].schema,
            PageHeaderSnippets[0].schema,
            PageContentSnippets[0].schema,
          ],
        },
      },
    },
  },
];
