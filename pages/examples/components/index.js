import React from 'react';
import {render} from 'react-dom';
import Button from './button';
import Menu from './menu';
import Radio from './radio';
import Checkbox from './checkbox';
import Icon from './icon';
import CheckboxList from './checkbox-list';
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
        <Checkbox />
        <h2>多选框下拉 CheckboxList</h2>
        <CheckboxList />
        <h2>图标 Icon</h2>
        <Icon />

        <hr/>
        <div style={{textAlign:'center',margin:'-18px auto 10px',backgroundColor:'white',width:'120px'}}>已经到底了</div>
    </div>
);

render(examples, document.getElementById('app'));
