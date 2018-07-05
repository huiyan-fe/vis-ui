import React, { Component } from 'react';
import { Button } from '../../../../src';
const ButtonGroup = Button.Group;

export default class App extends Component {
    render() {
        return <div>
            <Button>按钮default</Button>
            <Button size="small">按钮small</Button>
            <Button size="large">按钮large</Button>
            <Button disabled>按钮disabled</Button>
            <br/><br/>
            <Button type="primary">按钮primary</Button>
            <Button type="primary" size="small">按钮primary</Button>
            <Button type="primary" size="large">按钮primary</Button>
            <Button type="primary" disabled>按钮disabled</Button>
            <br/><br/>
            <Button type="ghost">按钮ghost</Button>
            <Button type="ghost" size="small">按钮ghost</Button>
            <Button type="ghost" size="large">按钮ghost</Button>
            <Button type="ghost" disabled>按钮ghost</Button>
            <br/><br/>
            <Button type="danger">按钮danger</Button>
            <Button type="danger" size="small">按钮danger</Button>
            <Button type="danger" size="large">按钮danger</Button>
            <Button type="danger" disabled>按钮danger</Button>
            <br/><br/>
            <Button type="success">按钮success</Button>
            <Button type="success" size="small">按钮success</Button>
            <Button type="success" size="large">按钮success</Button>
            <Button type="success" disabled>按钮success</Button>
            <br/><br/>
            <Button type="primary" onClick={()=>{alert('haha');}}>点击onClick出弹窗</Button>
            <br/>
            <h2>按钮组 Button.Group</h2>
            <ButtonGroup>
                <Button type="primary">按钮1</Button>
                <Button type="primary">按钮2</Button>
                <Button type="primary" onMouseEnter={(e)=>{console.log(e.target)}}>按钮3</Button>
                <Button type="primary" onClick={(e)=>{console.log(e)}}>按钮4</Button>
            </ButtonGroup>
        </div>;
    }
}

