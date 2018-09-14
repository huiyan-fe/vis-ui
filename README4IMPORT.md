# 在vis-ui中配置babel-plugin-import插件

## 简介
`babel-plugin-import`是蚂蚁金服团队给`antd`做的一个按需加载的babel插件，同时也能在`vis-ui`里使用，关于插件的[详细API](https://github.com/ant-design/babel-plugin-import)不在这里介绍，下面将主要手把手教你在`vis-ui`里配置该插件。

## 配置
### 安装`babel-plugin-import`
```
npm install babel-plugin-import --save-dev
```
### 配置babel
在`.babelrc`或者`webpack.config.js`或者`package.json`或者`fis-conf.js`中，总之在你`babel`的配置文件里
```
// 只按需加载组件
plugins: [
    ['import', {
        "libraryName": "vis-ui",
        "libraryDirectory": "lib/components"
    }]
]
```
编译后将会变成
```
import { Button } from 'vis-ui';

      ↓ ↓ ↓ ↓ ↓ ↓
      
var _button = require('vis-ui/lib/components/button');
```

**or**

```
// 按需加载组件+样式
plugins: [
    ['import', {
        "libraryName": "vis-ui",
        "libraryDirectory": "lib/components",
        "style": (name, file) => {
            return `${name}/style/index.css`;
        }
    }]
]
```
编译后将会变成
```
import { Button } from 'vis-ui';

      ↓ ↓ ↓ ↓ ↓ ↓
      
var _button = require('vis-ui/lib/components/button');
require('vis-ui/lib/components/button/style/index.css');
```
大功告成！

### 享受
泡上一壶茶，享受按需加载的快乐即可。