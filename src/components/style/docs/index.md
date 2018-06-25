# Themes 主题配置说明

## 说明
vis-ui支持灵活的主题配置。如慧眼的蓝色主题、开放平台的红色主题，均可通过简易的配置来完成。
- 在调色板`color`中布置一套自己平台的主题颜色
- 在`themes`中编写一份自己平台的主题`scss`文件，定义全局的样式变量
- 在项目文件中引入该主题文件

## 样例
假如你有一个名为`jazz`的项目待自定义主题。

### 第一步：编写主题scss文件
如果你是`vis-ui`的开发者，可以在`vis-ui`的`themes`下创建一个主题文件`jazz.scss`，这样你能够便利的使用到我们的调色盘

如果你只想用`vis-ui`来开发自己的项目，可以自己在项目合适的目录中创建你的主题文件`jazz.scss`
```scss
@import "../color/colors";

// The prefix to use on all css classes from vis-ui.
$vis-prefix: visui;

// -------- Colors -----------
$secondary-color: $jazz-blue;
$primary-color: $jazz-brand-blue;
$danger-color: $jazz-orange;
$success-color: $jazz-green;

// -------- Paddings -----------
$padding-lg: 24px;
$padding-md: 16px;
$padding-sm: 12px;
$padding-xs: 8px;

// ---BUTTON---
$btn-font-size-base: $font-size-base;
$btn-font-size-sm: $font-size-sm;

...
```

### 第二步：创建scss入口
创建一个入口scss文件`index.scss`，将jazz主题在默认的index主题**之前**引入！
```scss
@import '../../../src/components/style/themes/jazz.scss';   // put it ahead
@import '../../../src/components/style/index';
```

### 第三步：在自己的项目中引入入口文件
在自己的react项目中引入可爱又迷人的`vis-ui`组件们，并把在第二步里创建的入口样式文件也引入吧！
```javascript
import React from 'react';
import {render} from 'react-dom';
import Button from './button';
import Menu from './menu';
import './index.scss';      // 您好，请引入我~~~！！

const examples = (
    <div>
        <h2>导航菜单 Menu</h2>
        <Menu />
        <h2>按钮 Button</h2>
        <Button />
    </div>
);

render(examples, document.getElementById('app'));

```

### 结束，这实在是太容易了！