import React, { Component } from 'react';
import { CheckboxList, Button } from '../../../../src';

const CheckboxRadioList = CheckboxList.Radio;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            checkboxValue: [],
            radioValue: undefined
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
            defaultValue: [],
            value: this.state.checkboxValue,
            onChange: (checked)=>{
               this.setState({
                   checkboxValue: checked
               })
            }
        };

        const checkboxradiolistOptions = {
            title: '舞蹈类型',
            options: [
                {label:'Popping',value:4},
                {label:'Locking',value:5},
                {label:'Breaking',value:6}
            ],
            defaultCheckedKey: 1,
            defaultValue: 6,
            value: this.state.radioValue,
            onChange: (checked)=>{
               this.setState({
                    radioValue: checked
               })
            }
        };

        return <div>
            <CheckboxList {...checkboxlistOptions} disabled={this.state.disabled}/>
            <CheckboxRadioList {...checkboxradiolistOptions} disabled={this.state.disabled}/>
            <br/><br/>
            <Button size="small" type="primary" onClick={()=>{this.setState({disabled:!this.state.disabled})}}>切换disabled</Button>
            <Button size="small" type="primary" onClick={()=>{this.setState({checkboxValue:[],radioValue:undefined})}}>清空所选</Button>
        </div>
    }
}
