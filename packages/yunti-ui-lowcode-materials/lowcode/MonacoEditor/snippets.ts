import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const MonacoEditorSnippets: IPublicTypeSnippet[] = [
  {
    title: 'MonacoEditor',
    screenshot: '',
    schema: {
      componentName: 'MonacoEditor',
      props: {
        __component_name: 'MonacoEditor',
        language: 'json',
        height: '200px',
        defaultValue: `{
  "version": "1.0.0",
  "componentsMap": [
    {
      "package": "@yuntijs/ui-lowcode-materials",
      "version": "1.0.0",
      "exportName": "MonacoEditor",
      "destructuring": true,
      "subName": "",
      "componentName": "MonacoEditor"
    }
  ],
  "componentsTree": [],
  "i18n": {}
  }`,
      },
    },
  },
];

export const MonacoDiffEditorSnippets: IPublicTypeSnippet[] = [
  {
    title: 'MonacoDiffEditor',
    screenshot: '',
    schema: {
      componentName: 'MonacoDiffEditor',
      props: {
        __component_name: 'MonacoDiffEditor',
        language: 'json',
        height: '200px',
        original: `{
  "version": "1.0.0",
  "componentsMap": [
    {
      "package": "@yuntijs/ui-lowcode-materials",
      "version": "1.0.0",
      "exportName": "MonacoDiffEditor",
      "destructuring": true,
      "subName": "",
      "componentName": "MonacoDiffEditor"
    }
  ],
  "componentsTree": [],
  "i18n": {}
  }`,
        value: `{
  "version": "1.0.0",
  "componentsMap": [
    {
      "package": "@yuntijs/ui-lowcode-materials",
      "version": "1.1.0",
      "exportName": "MonacoDiffEditor",
      "destructuring": true,
      "subName": "",
      "componentName": "MonacoDiffEditor"
    }
  ],
  "componentsTree": [],
  "i18n": {}
  }`,
      },
    },
  },
];
