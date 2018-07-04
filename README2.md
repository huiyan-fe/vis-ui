# vis-ui 使用说明

## 样式引入
- 如果您需要配置自己的主题文件，请参考[使用vis-ui配置自己的主题](https://github.com/huiyan-fe/vis-ui/blob/master/src/components/style/docs/index.md)。但是这要求您的项目也是用`scss`来编写样式。
- 如果您想使用整套的vis-ui，可以使用`import 'vis-ui/lib/index.css'`，将样式文件在根目录全部导入
```javascript
import React from 'react';
import {render} from 'react-dom';
import 'vis-ui/lib/index.css';     // 一次性引入
import App from './index';

render( <App />, document.getElementById('wrapper'));
```
- 如果您想使用某个单独的vis-ui组件，单独引入组件独立的样式也是一个节约资源的选择。**现在版本的vis-ui单独引入的scss没有被编译成css文件，所以这要求您的项目也是使用的scss，后续会将单独引入的样式也编译成css文件，改进单独引入组件的体验**
```javascript
import React, { Component } from 'react';
import { Button } from 'vis-ui';
import 'vis-ui/lib/components/button/style/index.js';     // 单独引入

export default class App extends Component {
    render() {
        return <div>
            <Button>按钮default</Button>
        </div>;
    }
}
```