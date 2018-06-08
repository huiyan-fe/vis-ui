import React, { Component } from 'react';
import { Button } from '../../../../src';

export default class App extends Component {
    render() {
        return <div>
            <Button style={{marginRight: '10px'}}>按钮default</Button>
            <Button style={{marginRight: '10px'}} type="primary">按钮primary</Button>
            <Button style={{marginRight: '10px'}} size="small">按钮small</Button>
            <Button disabled>按钮disabled</Button>
        </div>;
    }
}

