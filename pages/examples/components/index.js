import React from 'react';
import {render} from 'react-dom';
import Button from './button';
import Menu from './menu';
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
    </div>
);

render(examples, document.getElementById('app'));
