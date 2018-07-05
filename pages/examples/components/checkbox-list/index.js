import React, { Component } from 'react';
import { CheckboxList } from '../../../../src';

export default class App extends Component {
    render() {
        const options = {
            title: '音乐类型',
            options: [
                {label:'R&B',value:1},
                {label:'Jazz',value:2},
                {label:'Soul',value:3}
            ],
            defaultCheckedKey: 1,
            onChange: (checked)=>{console.log(checked)}
        };

        return <div>
            <CheckboxList {...options}/>
        </div>
    }
}
