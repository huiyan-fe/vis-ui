import React from 'react';
import {render} from 'react-dom';
import './index.scss';              // 这样引入可配置主题
// import '../../../lib/index.css';    // 这样引入编译好的CSS文件
import Button from './button';
import Menu from './menu';
import Radio from './radio';
import Checkbox from './checkbox';
import Icon from './icon';
import Dropdown from './dropdown';
import CheckboxList from './checkbox-list';
import Message from './message';
import List from './list';
import Modal from './modal';
import Expand from './expand';
import DatePicker from './date-picker';
import './style.scss';

const examples = (
    <div>
        <h1>Vis-UI 示例</h1>
        <hr />
        <h2>导航菜单 Menu <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/menu/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/menu/docs/index.md">API文档</a></h2>
        <Menu />
        <h2>按钮 Button <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/button/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/button/docs/index.md">API文档</a></h2>
        <Button />
        <h2>单选框 Radio <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/radio/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/radio/docs/index.md">API文档</a></h2>
        <Radio />
        <h2>多选框 Checkbox <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/checkbox/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/checkbox/docs/index.md">API文档</a></h2>
        <Checkbox />
        <h2>下拉多选 Dropdown <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/dropdown/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/dropdown/docs/index.md">API文档</a></h2>
        <Dropdown />
        <h2>多选框下拉 CheckboxList <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/checkbox-list/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/checkbox-list/docs/index.md">API文档</a></h2>
        <CheckboxList />
        <h2>图标 Icon <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/icon/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/icon/docs/index.md">API文档</a></h2>
        <Icon />
        <h2>全局提示 Message <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/message/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/message/docs/index.md">API文档</a></h2>
        <Message />
        <h2>列表 List <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/list/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/list/docs/index.md">API文档</a></h2>
        <List />
        <h2>模态框 Modal <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/modal/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/modal/docs/index.md">API文档</a></h2>
        <Modal />
        <h2>展开内容 Expand <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/expand/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/expand/docs/index.md">API文档</a></h2>
        <Expand />
        <h2>日期选择框 DatePicker <a href="//github.com/huiyan-fe/vis-ui/blob/master/pages/examples/components/date-picker/index.js">示例代码</a> | <a href="//github.com/huiyan-fe/vis-ui/blob/master/src/components/date-picker/docs/index.md">API文档</a></h2>
        <DatePicker />

        <hr/>
        <div style={{textAlign:'center',margin:'-18px auto 10px',backgroundColor:'white',width:'120px'}}>已经到底了</div>
    </div>
);

render(examples, document.getElementById('app'));
