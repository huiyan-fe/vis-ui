import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import './style.scss';
import Button from './button';

const examples = (
    <div>
        <h1>Vis-UI 示例</h1>
        <hr />
        <h2>按钮</h2>
        <Button />
    </div>
);

render(examples, document.getElementById('app'));
