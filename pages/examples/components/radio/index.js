import React, { Component } from 'react';
import { Radio } from '../../../../src';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: 1,
            buttonValue1: 'weekday',
            buttonValue2: 'weekday',
            buttonValue3: 'weekday'
        };
    }

    onChangeRadioValue(radioValue) {
        console.log(radioValue)
        this.setState({radioValue});
    }

    onChangeButtonValue1(buttonValue1) {
        console.log(buttonValue1)
        this.setState({buttonValue1});
    }

    onChangeButtonValue2(buttonValue2) {
        console.log(buttonValue2)
        this.setState({buttonValue2});
    }

    onChangeButtonValue3(buttonValue3) {
        console.log(buttonValue3)
        this.setState({buttonValue3});
    }

    render() {
        return <div>
            <Radio checked={false}>未选中项</Radio>
            <Radio checked={false}>未选悬停</Radio>
            <Radio checked={true}>已选中项</Radio>
            <Radio disabled>未选失效</Radio>
            <Radio checked={true} disabled>已选失效</Radio>
            <Radio onChange={(e)=>{alert('haha!')}}>选中触发回调</Radio>
            <br/>

            <h2>单选框组 Radio.Group</h2>
            <RadioGroup value={this.state.radioValue} onChange={this.onChangeRadioValue.bind(this)} disabled>
                <Radio value="1">A</Radio>
                <Radio value="2">B</Radio>
                <Radio value="3">C</Radio>
                <Radio value="4">D</Radio>
            </RadioGroup>

            <h2>单选按钮 Radio.Button</h2>
            <RadioGroup disabled>
                <RadioButton value="weekday">工作日</RadioButton>
                <RadioButton value="weekend">周末</RadioButton>
                <RadioButton value="holiday">节假日</RadioButton>
            </RadioGroup>
            <RadioGroup size="small" value={this.state.buttonValue1} onChange={this.onChangeButtonValue1.bind(this)}>
                <RadioButton value="weekday">工作日</RadioButton>
                <RadioButton value="weekend">周末</RadioButton>
                <RadioButton value="holiday">节假日</RadioButton>
            </RadioGroup>
            <RadioGroup value={this.state.buttonValue2} onChange={this.onChangeButtonValue2.bind(this)}>
                <RadioButton value="weekday">工作日</RadioButton>
                <RadioButton value="weekend" disabled>周末</RadioButton>
                <RadioButton value="holiday">节假日</RadioButton>
            </RadioGroup>
            <RadioGroup size="large" value={this.state.buttonValue3} onChange={this.onChangeButtonValue3.bind(this)}>
                <RadioButton value="weekday">工作日</RadioButton>
                <RadioButton value="weekend">周末</RadioButton>
                <RadioButton value="holiday">节假日</RadioButton>
            </RadioGroup>
        </div>;
    }
}

