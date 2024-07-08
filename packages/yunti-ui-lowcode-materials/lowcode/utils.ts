import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

import { CLASS_NAME_PROP } from '../../shared/src/setters';

// 获取组件优先级
export const getPriority = (componentName: string) => {
  const priorities = {};
  const SortArr = ['Tree'];
  for (const [i, component] of SortArr.entries()) {
    priorities[component] = SortArr.length - i;
  }
  return priorities[componentName];
};

export const COMMON_CONFIGURE_PROPS: IPublicTypeFieldConfig[] = [
  {
    title: '通用配置',
    display: 'block',
    type: 'group',
    items: [
      {
        name: 'id',
        title: { label: '唯一 id', tip: 'id' },
        setter: [{ componentName: 'StringSetter' }],
      },
      CLASS_NAME_PROP,
    ],
  },
];
