import React from 'react';
import {render} from 'react-dom';
import Button from './button';

const examples = (
  <div>
    <h1>Vis-UI 示例</h1>
    <hr />
    <Button />
  </div>
)

render(examples, document.getElementById('app'))