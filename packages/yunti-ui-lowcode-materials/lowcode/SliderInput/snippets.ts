import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const SliderInputSnippets: IPublicTypeSnippet[] = [
  {
    title: 'SliderInput',
    screenshot: '',
    schema: {
      componentName: 'SliderInput',
      props: {
        __component_name: 'SliderInput',
        addonAfter: '核',
        min: 1,
        max: 16,
        gutter: 16,
        placeholder: 'CPU',
        step: 1,
        sliderCol: {
          type: 'JSExpression',
          value: '{ span: 12 }',
        },
        inputCol: {
          type: 'JSExpression',
          value: '{ span: 5 }',
        },
        sliderProps: {
          type: 'JSExpression',
          value: '{}',
        },
        inputProps: {
          type: 'JSExpression',
          value: '{}',
        },
      },
    },
  },
];
