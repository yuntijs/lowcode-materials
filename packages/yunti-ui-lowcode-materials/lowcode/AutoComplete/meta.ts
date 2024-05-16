import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

import { COMMON_CONFIGURE_PROPS } from '../utils';
import { AutoCompleteSnippets } from './snippets';

const AutoCompleteMetaInfo: IPublicTypeComponentMetadata = {
  componentName: '自动完成(AutoComplete)',
  title: 'AutoComplete',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'AutoComplete',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      ...COMMON_CONFIGURE_PROPS,
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'dataSource',
            'zh-CN': 'dataSource',
          },
          tip: 'dataSource | @deprecated Please use `options` instead',
        },
        name: 'dataSource',
        description: '@deprecated Please use `options` instead',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'StringSetter',
                    isRequired: false,
                    initialValue: '',
                  },
                  {
                    componentName: 'NumberSetter',
                    isRequired: false,
                    initialValue: 0,
                  },
                  {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false,
                  },
                  {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        extraSetter: {
                          componentName: 'MixedSetter',
                          isRequired: false,
                          props: {},
                        },
                      },
                    },
                    isRequired: false,
                    initialValue: {},
                  },
                  {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': 'T',
                                'zh-CN': 'T',
                              },
                            },
                            name: 'T',
                            setter: {
                              componentName: 'MixedSetter',
                              isRequired: true,
                              props: {},
                            },
                          },
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': '__@iterator',
                                'zh-CN': '__@iterator',
                              },
                            },
                            name: '__@iterator',
                            setter: {
                              componentName: 'FunctionSetter',
                              isRequired: true,
                            },
                          },
                        ],
                        extraSetter: {
                          componentName: 'MixedSetter',
                          isRequired: false,
                          props: {},
                        },
                      },
                    },
                  },
                  {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': 'value',
                                'zh-CN': 'value',
                              },
                            },
                            name: 'value',
                            setter: {
                              componentName: 'StringSetter',
                              isRequired: true,
                              initialValue: '',
                            },
                          },
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': 'text',
                                'zh-CN': 'text',
                              },
                            },
                            name: 'text',
                            setter: {
                              componentName: 'StringSetter',
                              isRequired: true,
                              initialValue: '',
                            },
                          },
                        ],
                        extraSetter: {
                          componentName: 'MixedSetter',
                          isRequired: false,
                          props: {},
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'status',
            'zh-CN': 'status',
          },
        },
        name: 'status',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'warning',
                value: 'warning',
              },
              {
                label: 'error',
                value: 'error',
              },
            ],
            options: [
              {
                label: 'warning',
                value: 'warning',
              },
              {
                label: 'error',
                value: 'error',
              },
            ],
          },
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'popupClassName',
            'zh-CN': 'popupClassName',
          },
        },
        name: 'popupClassName',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'dropdownClassName',
            'zh-CN': 'dropdownClassName',
          },
          tip: 'dropdownClassName | @deprecated Please use `popupClassName` instead',
        },
        name: 'dropdownClassName',
        description: '@deprecated Please use `popupClassName` instead',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'dropdownMatchSelectWidth',
            'zh-CN': 'dropdownMatchSelectWidth',
          },
          tip: 'dropdownMatchSelectWidth | @deprecated Please use `popupMatchSelectWidth` instead',
        },
        name: 'dropdownMatchSelectWidth',
        description: '@deprecated Please use `popupMatchSelectWidth` instead',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'popupMatchSelectWidth',
            'zh-CN': 'popupMatchSelectWidth',
          },
        },
        name: 'popupMatchSelectWidth',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'onChange',
            'zh-CN': 'onChange',
          },
        },
        name: 'onChange',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': 'prefixCls',
          },
        },
        name: 'prefixCls',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'rootClassName',
            'zh-CN': 'rootClassName',
          },
        },
        name: 'rootClassName',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'direction',
            'zh-CN': 'direction',
          },
        },
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'ltr',
                value: 'ltr',
              },
              {
                label: 'rtl',
                value: 'rtl',
              },
            ],
            options: [
              {
                label: 'ltr',
                value: 'ltr',
              },
              {
                label: 'rtl',
                value: 'rtl',
              },
            ],
          },
          initialValue: 'ltr',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'id',
            'zh-CN': 'id',
          },
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'searchValue',
            'zh-CN': 'searchValue',
          },
        },
        name: 'searchValue',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'autoClearSearchValue',
            'zh-CN': 'autoClearSearchValue',
          },
        },
        name: 'autoClearSearchValue',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'title',
            'zh-CN': 'title',
          },
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'showSearch',
            'zh-CN': 'showSearch',
          },
        },
        name: 'showSearch',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'tagRender',
            'zh-CN': 'tagRender',
          },
        },
        name: 'tagRender',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'maxLength',
            'zh-CN': 'maxLength',
          },
        },
        name: 'maxLength',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'tabIndex',
            'zh-CN': 'tabIndex',
          },
        },
        name: 'tabIndex',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'autoFocus',
            'zh-CN': 'autoFocus',
          },
        },
        name: 'autoFocus',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'notFoundContent',
            'zh-CN': 'notFoundContent',
          },
        },
        name: 'notFoundContent',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'placeholder',
            'zh-CN': 'placeholder',
          },
        },
        name: 'placeholder',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'onClear',
            'zh-CN': 'onClear',
          },
        },
        name: 'onClear',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'choiceTransitionName',
            'zh-CN': 'choiceTransitionName',
          },
        },
        name: 'choiceTransitionName',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'disabled',
            'zh-CN': 'disabled',
          },
        },
        name: 'disabled',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'open',
            'zh-CN': 'open',
          },
        },
        name: 'open',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'defaultOpen',
            'zh-CN': 'defaultOpen',
          },
        },
        name: 'defaultOpen',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'getInputElement',
            'zh-CN': 'getInputElement',
          },
          tip: 'getInputElement | @private Internal usage. Do not use in your production.',
        },
        name: 'getInputElement',
        description: '@private Internal usage. Do not use in your production.',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'getRawInputElement',
            'zh-CN': 'getRawInputElement',
          },
          tip: 'getRawInputElement | @private Internal usage. Do not use in your production.',
        },
        name: 'getRawInputElement',
        description: '@private Internal usage. Do not use in your production.',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'maxTagTextLength',
            'zh-CN': 'maxTagTextLength',
          },
        },
        name: 'maxTagTextLength',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'maxTagCount',
            'zh-CN': 'maxTagCount',
          },
        },
        name: 'maxTagCount',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
              {
                componentName: 'RadioGroupSetter',
                props: {
                  dataSource: [
                    {
                      label: 'responsive',
                      value: 'responsive',
                    },
                  ],
                  options: [
                    {
                      label: 'responsive',
                      value: 'responsive',
                    },
                  ],
                },
                initialValue: 'responsive',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'maxTagPlaceholder',
            'zh-CN': 'maxTagPlaceholder',
          },
        },
        name: 'maxTagPlaceholder',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                isRequired: false,
                initialValue: '',
              },
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': 'T',
                            'zh-CN': 'T',
                          },
                        },
                        name: 'T',
                        setter: {
                          componentName: 'MixedSetter',
                          isRequired: true,
                          props: {},
                        },
                      },
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': '__@iterator',
                            'zh-CN': '__@iterator',
                          },
                        },
                        name: '__@iterator',
                        setter: {
                          componentName: 'FunctionSetter',
                          isRequired: true,
                        },
                      },
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
              },
              {
                componentName: 'FunctionSetter',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'tokenSeparators',
            'zh-CN': 'tokenSeparators',
          },
        },
        name: 'tokenSeparators',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'StringSetter',
              isRequired: false,
              initialValue: '',
            },
          },
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'allowClear',
            'zh-CN': 'allowClear',
          },
        },
        name: 'allowClear',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': 'clearIcon',
                            'zh-CN': 'clearIcon',
                          },
                        },
                        name: 'clearIcon',
                        setter: {
                          componentName: 'MixedSetter',
                          props: {
                            setters: [
                              {
                                componentName: 'StringSetter',
                                isRequired: false,
                                initialValue: '',
                              },
                              {
                                componentName: 'NumberSetter',
                                isRequired: false,
                                initialValue: 0,
                              },
                              {
                                componentName: 'BoolSetter',
                                isRequired: false,
                                initialValue: false,
                              },
                              {
                                componentName: 'ObjectSetter',
                                props: {
                                  config: {
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      isRequired: false,
                                      props: {},
                                    },
                                  },
                                },
                                isRequired: false,
                                initialValue: {},
                              },
                              {
                                componentName: 'ObjectSetter',
                                props: {
                                  config: {
                                    items: [
                                      {
                                        title: {
                                          label: {
                                            'type': 'i18n',
                                            'en-US': 'T',
                                            'zh-CN': 'T',
                                          },
                                        },
                                        name: 'T',
                                        setter: {
                                          componentName: 'MixedSetter',
                                          isRequired: true,
                                          props: {},
                                        },
                                      },
                                      {
                                        title: {
                                          label: {
                                            'type': 'i18n',
                                            'en-US': '__@iterator',
                                            'zh-CN': '__@iterator',
                                          },
                                        },
                                        name: '__@iterator',
                                        setter: {
                                          componentName: 'FunctionSetter',
                                          isRequired: true,
                                        },
                                      },
                                    ],
                                    extraSetter: {
                                      componentName: 'MixedSetter',
                                      isRequired: false,
                                      props: {},
                                    },
                                  },
                                },
                              },
                              {
                                componentName: 'FunctionSetter',
                              },
                            ],
                          },
                        },
                      },
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'suffixIcon',
            'zh-CN': 'suffixIcon',
          },
        },
        name: 'suffixIcon',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'clearIcon',
            'zh-CN': 'clearIcon',
          },
          tip: 'clearIcon | Clear all icon',
        },
        name: 'clearIcon',
        description: 'Clear all icon',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                isRequired: false,
                initialValue: '',
              },
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': 'T',
                            'zh-CN': 'T',
                          },
                        },
                        name: 'T',
                        setter: {
                          componentName: 'MixedSetter',
                          isRequired: true,
                          props: {},
                        },
                      },
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': '__@iterator',
                            'zh-CN': '__@iterator',
                          },
                        },
                        name: '__@iterator',
                        setter: {
                          componentName: 'FunctionSetter',
                          isRequired: true,
                        },
                      },
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
              },
              {
                componentName: 'FunctionSetter',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'removeIcon',
            'zh-CN': 'removeIcon',
          },
          tip: 'removeIcon | Selector remove icon',
        },
        name: 'removeIcon',
        description: 'Selector remove icon',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                isRequired: false,
                initialValue: '',
              },
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': 'T',
                            'zh-CN': 'T',
                          },
                        },
                        name: 'T',
                        setter: {
                          componentName: 'MixedSetter',
                          isRequired: true,
                          props: {},
                        },
                      },
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': '__@iterator',
                            'zh-CN': '__@iterator',
                          },
                        },
                        name: '__@iterator',
                        setter: {
                          componentName: 'FunctionSetter',
                          isRequired: true,
                        },
                      },
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
              },
              {
                componentName: 'FunctionSetter',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'animation',
            'zh-CN': 'animation',
          },
        },
        name: 'animation',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'transitionName',
            'zh-CN': 'transitionName',
          },
        },
        name: 'transitionName',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'dropdownStyle',
            'zh-CN': 'dropdownStyle',
          },
        },
        name: 'dropdownStyle',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
          isRequired: false,
          initialValue: {},
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'dropdownRender',
            'zh-CN': 'dropdownRender',
          },
        },
        name: 'dropdownRender',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'dropdownAlign',
            'zh-CN': 'dropdownAlign',
          },
        },
        name: 'dropdownAlign',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'points',
                      'zh-CN': 'points',
                    },
                  },
                  name: 'points',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'MixedSetter',
                        isRequired: false,
                        props: {},
                      },
                    },
                    initialValue: [],
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': '_experimental',
                      'zh-CN': '_experimental',
                    },
                  },
                  name: '_experimental',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        extraSetter: {
                          componentName: 'MixedSetter',
                          isRequired: false,
                          props: {},
                        },
                      },
                    },
                    isRequired: false,
                    initialValue: {},
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'offset',
                      'zh-CN': 'offset',
                    },
                  },
                  name: 'offset',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'MixedSetter',
                        isRequired: false,
                        props: {},
                      },
                    },
                    initialValue: [],
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'targetOffset',
                      'zh-CN': 'targetOffset',
                    },
                  },
                  name: 'targetOffset',
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'MixedSetter',
                        isRequired: false,
                        props: {},
                      },
                    },
                    initialValue: [],
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'overflow',
                      'zh-CN': 'overflow',
                    },
                  },
                  name: 'overflow',
                  setter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': 'adjustX',
                                'zh-CN': 'adjustX',
                              },
                            },
                            name: 'adjustX',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    isRequired: false,
                                    initialValue: 0,
                                  },
                                  {
                                    componentName: 'BoolSetter',
                                    isRequired: false,
                                    initialValue: false,
                                  },
                                ],
                              },
                            },
                          },
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': 'adjustY',
                                'zh-CN': 'adjustY',
                              },
                            },
                            name: 'adjustY',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    isRequired: false,
                                    initialValue: 0,
                                  },
                                  {
                                    componentName: 'BoolSetter',
                                    isRequired: false,
                                    initialValue: false,
                                  },
                                ],
                              },
                            },
                          },
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': 'shiftX',
                                'zh-CN': 'shiftX',
                              },
                            },
                            name: 'shiftX',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    isRequired: false,
                                    initialValue: 0,
                                  },
                                  {
                                    componentName: 'BoolSetter',
                                    isRequired: false,
                                    initialValue: false,
                                  },
                                ],
                              },
                            },
                          },
                          {
                            title: {
                              label: {
                                'type': 'i18n',
                                'en-US': 'shiftY',
                                'zh-CN': 'shiftY',
                              },
                            },
                            name: 'shiftY',
                            setter: {
                              componentName: 'MixedSetter',
                              props: {
                                setters: [
                                  {
                                    componentName: 'NumberSetter',
                                    isRequired: false,
                                    initialValue: 0,
                                  },
                                  {
                                    componentName: 'BoolSetter',
                                    isRequired: false,
                                    initialValue: false,
                                  },
                                ],
                              },
                            },
                          },
                        ],
                        extraSetter: {
                          componentName: 'MixedSetter',
                          isRequired: false,
                          props: {},
                        },
                      },
                    },
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'autoArrow',
                      'zh-CN': 'autoArrow',
                    },
                  },
                  name: 'autoArrow',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false,
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'htmlRegion',
                      'zh-CN': 'htmlRegion',
                    },
                  },
                  name: 'htmlRegion',
                  setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                      dataSource: [
                        {
                          label: 'visible',
                          value: 'visible',
                        },
                        {
                          label: 'scroll',
                          value: 'scroll',
                        },
                        {
                          label: 'visibleFirst',
                          value: 'visibleFirst',
                        },
                      ],
                      options: [
                        {
                          label: 'visible',
                          value: 'visible',
                        },
                        {
                          label: 'scroll',
                          value: 'scroll',
                        },
                        {
                          label: 'visibleFirst',
                          value: 'visibleFirst',
                        },
                      ],
                    },
                    initialValue: 'visible',
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'dynamicInset',
                      'zh-CN': 'dynamicInset',
                    },
                  },
                  name: 'dynamicInset',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false,
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'useCssRight',
                      'zh-CN': 'useCssRight',
                    },
                  },
                  name: 'useCssRight',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false,
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'useCssBottom',
                      'zh-CN': 'useCssBottom',
                    },
                  },
                  name: 'useCssBottom',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false,
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'useCssTransform',
                      'zh-CN': 'useCssTransform',
                    },
                  },
                  name: 'useCssTransform',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false,
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'ignoreShake',
                      'zh-CN': 'ignoreShake',
                    },
                  },
                  name: 'ignoreShake',
                  setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    initialValue: false,
                  },
                },
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'placement',
            'zh-CN': 'placement',
          },
        },
        name: 'placement',
        setter: {
          componentName: 'SelectSetter',
          props: {
            dataSource: [
              {
                label: 'bottomLeft',
                value: 'bottomLeft',
              },
              {
                label: 'bottomRight',
                value: 'bottomRight',
              },
              {
                label: 'topLeft',
                value: 'topLeft',
              },
              {
                label: 'topRight',
                value: 'topRight',
              },
            ],
            options: [
              {
                label: 'bottomLeft',
                value: 'bottomLeft',
              },
              {
                label: 'bottomRight',
                value: 'bottomRight',
              },
              {
                label: 'topLeft',
                value: 'topLeft',
              },
              {
                label: 'topRight',
                value: 'topRight',
              },
            ],
          },
          initialValue: 'bottomLeft',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'builtinPlacements',
            'zh-CN': 'builtinPlacements',
          },
        },
        name: 'builtinPlacements',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
              },
            },
          },
          initialValue: {},
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'getPopupContainer',
            'zh-CN': 'getPopupContainer',
          },
        },
        name: 'getPopupContainer',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'showAction',
            'zh-CN': 'showAction',
          },
        },
        name: 'showAction',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'RadioGroupSetter',
              props: {
                dataSource: [
                  {
                    label: 'focus',
                    value: 'focus',
                  },
                  {
                    label: 'click',
                    value: 'click',
                  },
                ],
                options: [
                  {
                    label: 'focus',
                    value: 'focus',
                  },
                  {
                    label: 'click',
                    value: 'click',
                  },
                ],
              },
              initialValue: 'focus',
            },
          },
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'backfill',
            'zh-CN': 'backfill',
          },
        },
        name: 'backfill',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'fieldNames',
            'zh-CN': 'fieldNames',
          },
        },
        name: 'fieldNames',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'value',
                      'zh-CN': 'value',
                    },
                  },
                  name: 'value',
                  setter: {
                    componentName: 'StringSetter',
                    isRequired: false,
                    initialValue: '',
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'label',
                      'zh-CN': 'label',
                    },
                  },
                  name: 'label',
                  setter: {
                    componentName: 'StringSetter',
                    isRequired: false,
                    initialValue: '',
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'groupLabel',
                      'zh-CN': 'groupLabel',
                    },
                  },
                  name: 'groupLabel',
                  setter: {
                    componentName: 'StringSetter',
                    isRequired: false,
                    initialValue: '',
                  },
                },
                {
                  title: {
                    label: {
                      'type': 'i18n',
                      'en-US': 'options',
                      'zh-CN': 'options',
                    },
                  },
                  name: 'options',
                  setter: {
                    componentName: 'StringSetter',
                    isRequired: false,
                    initialValue: '',
                  },
                },
              ],
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'inputValue',
            'zh-CN': 'inputValue',
          },
          tip: 'inputValue | @deprecated Use `searchValue` instead',
        },
        name: 'inputValue',
        description: '@deprecated Use `searchValue` instead',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'onSelect',
            'zh-CN': 'onSelect',
          },
        },
        name: 'onSelect',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'onDeselect',
            'zh-CN': 'onDeselect',
          },
        },
        name: 'onDeselect',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'filterOption',
            'zh-CN': 'filterOption',
          },
          tip: 'filterOption | In Select, `false` means do nothing.',
        },
        name: 'filterOption',
        description: 'In Select, `false` means do nothing.',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
              {
                componentName: 'FunctionSetter',
                isRequired: false,
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'filterSort',
            'zh-CN': 'filterSort',
          },
        },
        name: 'filterSort',
        setter: {
          componentName: 'FunctionSetter',
          isRequired: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'optionFilterProp',
            'zh-CN': 'optionFilterProp',
          },
        },
        name: 'optionFilterProp',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'options',
            'zh-CN': 'options',
          },
        },
        name: 'options',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  extraSetter: {
                    componentName: 'MixedSetter',
                    isRequired: false,
                    props: {},
                  },
                },
              },
              isRequired: false,
              initialValue: {},
            },
          },
          initialValue: [],
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'optionRender',
            'zh-CN': 'optionRender',
          },
        },
        name: 'optionRender',
        setter: {
          componentName: 'FunctionSetter',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'defaultActiveFirstOption',
            'zh-CN': 'defaultActiveFirstOption',
          },
        },
        name: 'defaultActiveFirstOption',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'virtual',
            'zh-CN': 'virtual',
          },
        },
        name: 'virtual',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'listHeight',
            'zh-CN': 'listHeight',
          },
        },
        name: 'listHeight',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'listItemHeight',
            'zh-CN': 'listItemHeight',
          },
        },
        name: 'listItemHeight',
        setter: {
          componentName: 'NumberSetter',
          isRequired: false,
          initialValue: 0,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'menuItemSelectedIcon',
            'zh-CN': 'menuItemSelectedIcon',
          },
        },
        name: 'menuItemSelectedIcon',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                isRequired: false,
                initialValue: '',
              },
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
              {
                componentName: 'BoolSetter',
                isRequired: false,
                initialValue: false,
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': 'T',
                            'zh-CN': 'T',
                          },
                        },
                        name: 'T',
                        setter: {
                          componentName: 'MixedSetter',
                          isRequired: true,
                          props: {},
                        },
                      },
                      {
                        title: {
                          label: {
                            'type': 'i18n',
                            'en-US': '__@iterator',
                            'zh-CN': '__@iterator',
                          },
                        },
                        name: '__@iterator',
                        setter: {
                          componentName: 'FunctionSetter',
                          isRequired: true,
                        },
                      },
                    ],
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
              },
              {
                componentName: 'FunctionSetter',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'value',
            'zh-CN': 'value',
          },
        },
        name: 'value',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
          isRequired: false,
          initialValue: {},
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'defaultValue',
            'zh-CN': 'defaultValue',
          },
        },
        name: 'defaultValue',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              extraSetter: {
                componentName: 'MixedSetter',
                isRequired: false,
                props: {},
              },
            },
          },
          isRequired: false,
          initialValue: {},
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'size',
            'zh-CN': 'size',
          },
        },
        name: 'size',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'middle',
                value: 'middle',
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
            options: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'middle',
                value: 'middle',
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
          },
          initialValue: 'small',
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'bordered',
            'zh-CN': 'bordered',
          },
        },
        name: 'bordered',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'showArrow',
            'zh-CN': 'showArrow',
          },
          tip: 'showArrow | @deprecated `showArrow` is deprecated which will be removed in next major version. It will be a',
        },
        name: 'showArrow',
        description:
          '@deprecated `showArrow` is deprecated which will be removed in next major version. It will be a',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'ref',
            'zh-CN': 'ref',
          },
        },
        name: 'ref',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter',
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            'type': 'i18n',
            'en-US': 'key',
            'zh-CN': 'key',
          },
        },
        name: 'key',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                isRequired: false,
                initialValue: '',
              },
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
            ],
          },
        },
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: 'onClick',
          template: "onClick(event,${extParams}){ \nconsole.log('onClick,event);}",
        },
        {
          name: 'onSearch',
          description: 'onSearch',
          template: "onSearch(value,${extParams}){ \nconsole.log('onSearch,value);}",
        },
        {
          name: 'onDropdownVisibleChange',
          description: 'onDropdownVisibleChange',
          template:
            "onDropdownVisibleChange(open,${extParams}){ \nconsole.log('onDropdownVisibleChange,open);}",
        },
        {
          name: 'onBlur',
          description: 'onBlur',
          template: "onBlur(event,${extParams}){ \nconsole.log('onBlur,event);}",
        },
        {
          name: 'onFocus',
          description: 'onFocus',
          template: "onFocus(event,${extParams}){ \nconsole.log('onFocus,event);}",
        },
        {
          name: 'onKeyUp',
          description: 'onKeyUp',
          template: "onKeyUp(event,${extParams}){ \nconsole.log('onKeyUp,event);}",
        },
        {
          name: 'onKeyDown',
          description: 'onKeyDown',
          template: "onKeyDown(event,${extParams}){ \nconsole.log('onKeyDown,event);}",
        },
        {
          name: 'onMouseDown',
          description: 'onMouseDown',
          template: "onMouseDown(event,${extParams}){ \nconsole.log('onMouseDown,event);}",
        },
        {
          name: 'onPopupScroll',
          description: 'onPopupScroll',
          template: "onPopupScroll(event,${extParams}){ \nconsole.log('onPopupScroll,event);}",
        },
        {
          name: 'onInputKeyDown',
          description: 'onInputKeyDown',
          template: "onInputKeyDown(event,${extParams}){ \nconsole.log('onInputKeyDown,event);}",
        },
        {
          name: 'onMouseEnter',
          description: 'onMouseEnter',
          template: "onMouseEnter(event,${extParams}){ \nconsole.log('onMouseEnter,event);}",
        },
        {
          name: 'onMouseLeave',
          description: 'onMouseLeave',
          template: "onMouseLeave(event,${extParams}){ \nconsole.log('onMouseLeave,event);}",
        },
      ],
    },
    component: {},
  },
  category: '数据输入',
};

export const AutoCompleteMeta = {
  ...AutoCompleteMetaInfo,
  snippets: AutoCompleteSnippets,
};
