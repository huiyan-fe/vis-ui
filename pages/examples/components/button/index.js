import React, { Component } from 'react';
import { Button } from '../../../../src';

export default class App extends Component {
    render() {
        return <Button style={{height: '400px'}} className="visui-btn-danger">
            按钮1
        </Button>
    }
}

