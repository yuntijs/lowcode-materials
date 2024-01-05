// 获取组件优先级
const getPriority = componentName => {
  const priorities = {};
  const SortArr = ['Tree'];
  SortArr.map((component, i) => {
    priorities[component] = SortArr.length - i;
  });
  return priorities[componentName];
};

export const getCommonProps = () => [
  {
    title: '通用属性',
    display: 'block',
    type: 'group',
    items: [
      {
        name: 'id',
        title: { label: '唯一id', tip: 'id' },
        setter: ['StringSetter'],
      },
      {
        name: 'className',
        title: { label: '类名', tip: '自定义样式类名' },
        setter: ['StringSetter'],
      },
    ],
  },
];

export const getMeta = (componentName, otherMeta) => {
  const componentNameArr = componentName.split('.');

  return {
    title: componentName,
    group: 'YuntiUi',
    componentName,
    priority: getPriority(componentNameArr[0]),
    devMode: 'proCode',
    ...(otherMeta || {}),
    npm: {
      package: '@yunti/yunti-ui-lowcode-materials',
      version: '0.1.0',
      exportName: componentNameArr[0],
      destructuring: true,
      subName: componentNameArr[1] || '',
      ...(otherMeta?.npm || {}),
    },
    configure: {
      ...(otherMeta.configure || {}),
      props: getCommonProps().concat(otherMeta?.configure?.props || []),
      supports: {
        loop: true,
        condition: true,
        style: true,
        ...(otherMeta?.configure?.supports || {}),
      },
    },
  };
};
