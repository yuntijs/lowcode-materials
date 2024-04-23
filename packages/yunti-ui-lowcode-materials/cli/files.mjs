import fse from 'fs-extra'
import path from 'path'
import { formatComponentSchema } from './utils.mjs'

export const mkfileView = ({ rootDir, lowcodeDir }) => {

  const filePath = path.resolve(rootDir,`${lowcodeDir}/view.tsx`)

  if(fse.existsSync(filePath)) return

  const fileContent = `export * from '@yuntijs/ui';`

  fse.outputFileSync(filePath, fileContent);

}

export const mkfileUtils= ({ rootDir, lowcodeDir }) => {

  const filePath = path.resolve(rootDir,`${lowcodeDir}/utils.ts`)

  if(fse.existsSync(filePath)) return

  const fileContent = `import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

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
      {
        name: 'className',
        title: { label: '类名', tip: '自定义样式类名' },
        setter: [{ componentName: 'StringSetter' }],
      },
    ],
  },
];`

  fse.outputFileSync(filePath, fileContent);

}

export const mkfileMeta = ({ rootDir, lowcodeDir, componentsMetaArr = [] }) => {

  const filePath = path.resolve(rootDir,`${lowcodeDir}/meta.ts`)
  
  const fileContent = `import pkgJson from '../package.json';
${
componentsMetaArr.map(item => `import { ${item.name} } from '${item.path}';
`).join('')
}
const components = [${componentsMetaArr.map(item => item.name).join(', ')}].map(c => {
  if (c.npm) {
    c.npm.version = pkgJson.version;
  }
  if (!c.group) {
    c.group = 'YuntiUI 组件';
  }
  return c;
});
  
// 注意不要使用 default 导出
export { components };
`

  fse.outputFileSync(filePath, fileContent);

}

export const mkfilesComponent = ({ rootDir, lowcodeDir, metaDevSubfix, metaFormat, component, packageInfo, componentNameFolder }) => {

  const getComponentFilePath = (name) =>  `${lowcodeDir}/${componentNameFolder}/${name}${metaDevSubfix}.${metaFormat || 'ts'}`
  const filePath = path.resolve(rootDir, getComponentFilePath('meta'))

  if(fse.existsSync(filePath)) return

  const { componentName } = component || {}

  const schema = formatComponentSchema(component);
  if (schema.title === packageInfo.name) {
    schema.title = schema.componentName;
  }
  const { snippets } = schema;
  const componentDescription = schema;
  delete componentDescription.snippets;

  const fileContent =  `
import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import { COMMON_CONFIGURE_PROPS } from '../utils';
import { ${componentName}Snippets } from './snippets';

const ${componentName}MetaInfo: IPublicTypeComponentMetadata = ${JSON.stringify(
        componentDescription,
        null,
        2,
      ).replace('"props": [\n', '"props": [\n      ...COMMON_CONFIGURE_PROPS,\n')
    };

export const ${componentName}Meta = {
  ...${componentName}MetaInfo,
  snippets: ${componentName}Snippets
}

`

  fse.outputFileSync(filePath, fileContent);


  const snippetsFilePath = path.resolve(rootDir, getComponentFilePath('snippets'))
  const snippetsFileContent = `
  import { IPublicTypeSnippet } from '@alilc/lowcode-types';

  export const ${componentName}Snippets: IPublicTypeSnippet[] = ${JSON.stringify(snippets, null, 2)};
  
`
  fse.outputFileSync(snippetsFilePath, snippetsFileContent);

}

