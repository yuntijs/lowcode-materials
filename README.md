# lowcode-materials

Materials for low-code engine.

---

## 目录结构

```bash
lowcode-materials
├─ .dumi
├─ .dumirc.ts # dumi 的配置文件
├─ .eslintrc.js
├─ .fatherrc.base.ts # father 的基础配置文件，用于组件库打包
├─ .gitignore
├─ .husky
├─ .npmrc
├─ .prettierrc.js
├─ .stylelintrc.js
├─ README.md
├─ constants.ts # 组件库常量文件 (放在 shared 中无法在 dumi 及 father 配置文件中使用，暂时放在了根目录)
├─ docs # 组件库文档目录
│  ├─ index.md # 组件库文档首页
│  └─ guide.md 组件库其他文档路由（示意）
├─ package.json
├─ packages # 组件库目录 (monorepo 模式)
│  ├─ index.md # 组件库概览文档
│  ├─ react-markdown-lowcode-materials # 组件举例
│  │  ├─ README.md
│  │  ├─ demo # 组件示例目录
│  │  │  ├─ assets.json
│  │  │  └─ index.tsx
│  │  ├─ index.md # 组件文档
│  │  ├─ lowcode # 组件的低码配置
│  │  │  ├─ markdown
│  │  │  │  └─ meta.ts
│  │  │  ├─ meta.ts
│  │  │  ├─ view.less # 可选
│  │  │  └─ view.tsx
│  │  ├─ package.json
│  │  ├─ src # 组件源码目录
│  │  │  └─ index.tsx
│  │  └─ tsconfig.json
│  └─ shared # 共享组件目录
├─ plugin.ts
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
└─ tsconfig.json
```

## 开发构建

### 克隆项目

```bash
git clone git@github.com:yuntijs/lowcode-materials.git
```

### 环境要求

- **Node.js v18.x**
- **pnpm v8.x**

### 安装依赖

```bash
npm i pnpm @antfu/ni -g
ni
```

### 开发

```bash
# 开发文档
nr dev

# 开发 yunti-ui
nr dev:yunti-ui

# 开发 react-markdown
nr dev:markdown
```

### 构建及发布

```bash
# 构建文档
nr build

# 发布组件需要进入到各个组件目录单独发布，例如发布 markdown：

cd packages/react-markdown-lowcode-materials && npm publish
```
