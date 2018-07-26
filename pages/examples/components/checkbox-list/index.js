import React, { Component } from 'react';
import { CheckboxList } from '../../../../src';

const CheckboxRadioList = CheckboxList.Radio;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };
    }

    render() {
        const checkboxlistOptions = {
            title: '音乐类型',
            options: [
                {label:'R&B',value:1},
                {label:'Jazz',value:2},
                {label:'Soul',value:3}
            ],
            defaultCheckedKey: 1,
            defaultCheckedValue: [],
            onChange: (checked)=>{console.log(checked)}
        };

        const checkboxradiolistOptions = {
            title: '舞蹈类型',
            options: [
                {label:'Popping',value:4},
                {label:'Locking',value:5},
                {label:'Breaking',value:6}
            ],
            defaultCheckedKey: 1,
            defaultCheckedValue: 6,
            onChange: (checked)=>{console.log(checked)}
        };

        return <div>
            <CheckboxList {...checkboxlistOptions} disabled={this.state.disabled}/>
            <CheckboxRadioList {...checkboxradiolistOptions} disabled={this.state.disabled}/>
            <a href="javascript:" onClick={()=>{this.setState({disabled:!this.state.disabled})}}>toggle disabled</a>
        </div>
    }
}
