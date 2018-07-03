import React, { Component } from 'react';
import { Icon } from '../../../../src';

export default class App extends Component {
    render() {
        return <div>
            <Icon type="down" />
            <br/>
            <Icon type="down" style={{borderTop: '6px solid red', transform: 'rotate(180deg)'}}/>
        </div>;
    }
}

