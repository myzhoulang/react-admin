<h1 align="center">React-admin</h1>

## 需要哪些依赖？

### 初始化项目脚手架

- [create-react-app(v3.2.0)](https://github.com/facebook/create-react-app)

### 依赖的工具

- [react-app-rewired(v2.1.5)](https://github.com/timarney/react-app-rewired)
- [customize-cra(v0.9.1)](https://github.com/arackaf/customize-cra)
- [babel-plugin-import(v.1.12.2)](https://github.com/ant-design/babel-plugin-import)

### 各种第三方库

- [React(v16.12.0)](https://github.com/facebook/react)
- [less(v3.10.3)](http://lesscss.org/)
- [antd(v3.25.3)](https://github.com/ant-design/ant-design/)
- React-router
- Mobx

## 配置

### 配置使用 `react-app-rewired` 启动项目

1. 安装 `react-app-rewired`和`customize-cra`

```bash
$ yarn add react-app-rewired customize-cra
```

2. 修改`package.json`启动配置。`scripts`项修改后的样子。

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
}
```

### 配置 `eslint`和 `prettier`

1. 在项目根目录下新建 `.eslintrc.js`，并根据需要配置规则。`prettier`配置也可以在这里面配置。**(`create-react-app`版本至少 3.0)**。

2. 在 `.package.json`的`script`中修改 `start`

```json
{
  "script": {
    "start": "EXTEND_ESLINT=true react-app-rewired start"
  }
}
```

3. 在项目根目录下新建 `config-overrides.js`用于修改`webpack`配置。

### 添加 `less`支持。

1. 安装`less`和`less-loader`。

```bash
$ yarn add less less-loader
```

2. 在`config-overrides.js`文件中使用 `customize-cra`中提供的`addLessLoader`函数来支持 less。也可以在这个插件中配置一些全局变量。这里的全局变量会覆盖 `antd`中的 `less`变量。 用于定制主题。

```js
const { override, addLessLoader } = require("customize-cra");

module.exports = override(
  // .... 其他配置
  addLessLoader({
    javascriptEnabled: true,
    // 自定主题， 自定义主题和按需加载 antd 一起使用的时候，需要修改按需加载中的 style 为 true
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
```

### 配置`antd`组件按需加载。

1. 安装`babel-plugin-import`插件。

```bash
$ yarn add babel-plugin-import
```

2. 在`config-overrides.js`文件中使用 `customize-cra`中提供的`fixBabelImports`函数来支持按需加载。

```js
const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
  // .... 其他配置
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  })
);
```
