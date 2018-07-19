import React, { Component } from 'react';
import { CheckboxList } from '../../../../src';

const CheckboxRadioList = CheckboxList.Radio;

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
            defaultCheckedValue: [1,2],
            onChange: (checked)=>{console.log(checked)}
        };

        return <div>
            <CheckboxList {...options}/>
            <CheckboxRadioList {...options}/>
        </div>
    }
}
