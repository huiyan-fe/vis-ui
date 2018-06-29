import React, { Component } from 'react';
import { Checkbox } from '../../../../src';
const CheckboxGroup = Checkbox.Group;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: 1,
            buttonValue1: 'weekday',
            buttonValue2: 'weekday',
            buttonValue3: 'weekday',
            indeterminate: true
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
            <Checkbox>未选中状态</Checkbox>
            <Checkbox checked>选中状态</Checkbox>
            <Checkbox disabled>禁用状态</Checkbox>
            <Checkbox checked disabled>禁用且选中</Checkbox>
            <Checkbox indeterminate={this.state.indeterminate} onChange={(checked)=>{
                this.setState({indeterminate:checked})
            }}>
                indeterminate状态
            </Checkbox>

            <h2>多选框组 CheckboxGroup</h2>
            <CheckboxGroup>
                <Checkbox value="1">A</Checkbox>
                <Checkbox value="2">B</Checkbox>
                <Checkbox value="3">C</Checkbox>
                <Checkbox value="4">D</Checkbox>
            </CheckboxGroup>
        </div>;
    }
}

