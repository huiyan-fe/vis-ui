import React, { Component } from 'react';
import { Button } from '../../../../src';
const ButtonGroup = Button.Group;

export default class App extends Component {
    render() {
        return <div>
            <ButtonGroup>
                <Button>按钮default</Button>
                <Button size="small">按钮small</Button>
                <Button size="large">按钮large</Button>
                <Button disabled>按钮disabled</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button type="primary">按钮primary</Button>
                <Button type="primary" size="small">按钮primary</Button>
                <Button type="primary" size="large">按钮primary</Button>
                <Button type="primary" disabled>按钮disabled</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button type="ghost">按钮ghost</Button>
                <Button type="ghost" size="small">按钮ghost</Button>
                <Button type="ghost" size="large">按钮ghost</Button>
                <Button type="ghost" disabled>按钮ghost</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button type="danger">按钮danger</Button>
                <Button type="danger" size="small">按钮danger</Button>
                <Button type="danger" size="large">按钮danger</Button>
                <Button type="danger" disabled>按钮danger</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button type="success">按钮success</Button>
                <Button type="success" size="small">按钮success</Button>
                <Button type="success" size="large">按钮success</Button>
                <Button type="success" disabled>按钮success</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button type="primary" onClick={()=>{alert('haha');}}>点击onClick出弹窗</Button>
            </ButtonGroup>
        </div>;
    }
}

