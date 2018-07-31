import React, { Component } from 'react';
import { Button, Message } from '../../../../src';

export default class App extends Component {
    render() {
        return <Button size="large" onClick={()=>{
            Message.tip('天空一声巨响，Vis-UI闪亮登场！');
        }}>点击弹出Message提示</Button>
    }
}
