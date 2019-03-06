import React, { Component } from 'react';
import { Button, Message } from '../../../../src';

export default class App extends Component {
    render() {
        return <Button size="large" onClick={()=>{
            Message.tip('天空一声巨响，Vis-UI闪亮登场！');
            // Message.tip('天空一声巨响，Vis-UI闪亮登场！', 4000, {
            //     className: 'disco',
            //     style: {top: '100px', color: '#a25def', background: 'rgba(233,233,233,.3)', paddingTop: '6px'}
            // }, ()=>{console.log('消失了')});
        }}>点击弹出Message提示</Button>
    }
}
