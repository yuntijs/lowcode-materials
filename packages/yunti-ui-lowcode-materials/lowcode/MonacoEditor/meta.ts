import { IPublicTypeComponentMetadata, IPublicTypeConfigure } from '@alilc/lowcode-types';

import { Setters } from '../../../shared/src';
import { COMMON_CONFIGURE_PROPS, getPriority } from '../utils';
import { MonacoDiffEditorSnippets, MonacoEditorSnippets } from './snippets';

export const MonacoEditorMeta: IPublicTypeComponentMetadata = {
  title: 'MonacoEditor',
  componentName: 'MonacoEditor',
  category: '数据展示',
  snippets: MonacoEditorSnippets,
  priority: getPriority('MonacoEditor'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'MonacoEditor',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      ...COMMON_CONFIGURE_PROPS,
      {
        title: '常用配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'language',
            title: {
              label: '语言',
            },
            defaultValue: 'javascript',
            setter: Setters.StringSetter,
          },
          {
            name: 'width',
            title: {
              label: '宽度',
            },
            defaultValue: '100%',
            setter: Setters.StringSetter,
          },
          {
            name: 'height',
            title: {
              label: '高度',
            },
            defaultValue: '100%',
            setter: Setters.StringSetter,
          },
          {
            name: 'theme',
            title: {
              label: '主题',
            },
            defaultValue: 'vs',
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                options: ['vs', 'vs-dark', 'hc-light', 'hc-black'],
              },
            },
          },
          {
            name: 'lineNumbers',
            title: {
              label: '行号',
              tip: '行号展示方式',
            },
            defaultValue: 'on',
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                options: ['on', 'off', 'relative', 'interval'],
              },
            },
          },
          {
            name: 'wordWrap',
            title: {
              label: '换行',
              tip: '是否开启自动换行',
            },
            defaultValue: 'off',
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                options: ['on', 'off', 'wordWrapColumn', 'bounded'],
              },
            },
          },
          {
            name: 'inlineView',
            title: {
              label: '单列布局',
              tip: 'Render the differences in one editor. Defaults to off, render the differences in two side-by-side editors',
            },
            defaultValue: 'off',
            setter: {
              ...Setters.RadioGroupSetter,
              props: {
                defaultValue: 'off',
                options: ['on', 'off', 'auto'],
              },
            },
          },
          {
            name: 'contextmenu',
            title: {
              label: '右键菜单',
              tip: '是否开启右键菜单',
            },
            defaultValue: true,
            setter: Setters.BoolSetter,
          },
          {
            name: 'minimapEnabled',
            title: {
              label: '右侧预览',
              tip: '是否启用右侧预览',
            },
            defaultValue: false,
            setter: Setters.BoolSetter,
          },
          {
            name: 'readOnly',
            title: {
              label: '只读',
              tip: '内容是否只读',
            },
            defaultValue: false,
            setter: Setters.BoolSetter,
          },
        ],
      },
      {
        title: '高级配置',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'path',
            title: {
              label: '路径',
              tip: 'path of the current model, useful when creating a multi-model editor',
            },
            setter: Setters.StringSetter,
          },
          {
            name: 'version',
            title: {
              label: '版本',
            },
            defaultValue: '0.45.0',
            setter: Setters.StringSetter,
          },
          {
            name: 'options',
            title: {
              label: 'options',
            },
            setter: Setters.VariableSetter,
          },
        ],
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
      events: [
        {
          name: 'onChange',
          description: '输入时触发',
          template: `
  onChange(input, event) {
    console.log(input, event);
  }
`,
        },
        {
          name: 'editorWillMount',
          description: 'editor 即将渲染时触发',
          template: `
  editorWillMount(monaco) {
    console.log(monaco);
  }
`,
        },
        {
          name: 'editorDidMount',
          description: 'editor 渲染完成后触发',
          template: `
  editorDidMount(editor, monaco) {
    console.log(editor, monaco);
  }
`,
        },
        {
          name: 'editorWillUnmount',
          description: 'editor 即将卸载时触发',
          template: `
  editorWillUnmount(editor, monaco) {
    console.log(editor, monaco);
  }
`,
        },
      ],
    },
  },
};

export const MonacoDiffEditorMeta: IPublicTypeComponentMetadata = {
  title: 'MonacoDiffEditor',
  componentName: 'MonacoDiffEditor',
  category: '数据展示',
  snippets: MonacoDiffEditorSnippets,
  priority: getPriority('MonacoDiffEditor'),
  devMode: 'proCode',
  npm: {
    package: '@yuntijs/ui-lowcode-materials',
    version: '{{version}}',
    exportName: 'MonacoDiffEditor',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [...(MonacoEditorMeta.configure as IPublicTypeConfigure)!.props!],
    supports: {
      ...(MonacoEditorMeta.configure as IPublicTypeConfigure)!.supports,
    },
  },
};
