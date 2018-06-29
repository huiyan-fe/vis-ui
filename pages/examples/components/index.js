import React from 'react';
import {render} from 'react-dom';
import Button from './button';
import Menu from './menu';
import Radio from './radio';
import Checkbox from './checkbox';
import './index.scss';
import './style.scss';

const examples = (
    <div>
        <h1>Vis-UI 示例</h1>
        <hr />
        <h2>导航菜单 Menu</h2>
        <Menu />
        <h2>按钮 Button</h2>
        <Button />
        <h2>单选框 Radio</h2>
        <Radio />
        <h2>多选框 Checkbox</h2>
        {/* <Checkbox /> */}
    </div>
);

render(examples, document.getElementById('app'));
