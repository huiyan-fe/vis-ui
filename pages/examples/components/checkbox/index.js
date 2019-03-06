import React, { Component } from 'react';
import { Checkbox } from '../../../../src';
const CheckboxGroup = Checkbox.Group;
const CheckboxText = Checkbox.Text;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxValue: ['1','2'],
            checkedList: [],
            optionsList: ['Tom', 'Jerry', 'Andy', 'Tony', 'David'],
            indeterminate: true,
            checkAll: false,
            v: true
        };
    }

    onChangeCheckboxValue(checkboxValue) {
        this.setState({checkboxValue});
    }

    onChangeCheckedList(checkedList) {
        const optionsList = this.state.optionsList;
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < optionsList.length),
            checkAll: checkedList.length === optionsList.length,
        });
    }

    render() {
        return <div>
            <Checkbox defaultChecked={true} onChange={(e)=>{console.log(e)}}>未选中状态</Checkbox>
            <Checkbox checked={this.state.v} onChange={(v)=>{this.setState({v})}}>选中状态</Checkbox>
            <Checkbox disabled>禁用状态</Checkbox>
            <Checkbox checked disabled>禁用且选中</Checkbox>
            <Checkbox indeterminate={true}>indeterminate状态</Checkbox>
            <Checkbox indeterminate={true} disabled>indeterminate disabled状态</Checkbox>
            <Checkbox checked>选中且受控</Checkbox>

            <h2>多选框组 CheckboxGroup</h2>
            <CheckboxGroup value={this.state.checkboxValue} onChange={this.onChangeCheckboxValue.bind(this)}>
                <Checkbox value="1">A</Checkbox>
                <Checkbox value="2">B</Checkbox>
                <Checkbox value="3">C</Checkbox>
                <Checkbox value="4">D</Checkbox>
            </CheckboxGroup>
            <br/>
            <Checkbox 
                indeterminate={this.state.indeterminate} 
                checked={this.state.checkAll}
                onChange={(checked)=>{
                    const optionsList = this.state.optionsList;
                    this.setState({
                        checkedList: checked ? optionsList : [],
                        indeterminate: false,
                        checkAll: checked,
                    });
                }}
            >
                indeterminate状态
            </Checkbox>
            <div style={{height:'10px',width:'300px',borderBottom:'1px dashed #ccc',marginBottom:'5px'}}/>
            <CheckboxGroup value={this.state.checkedList} onChange={this.onChangeCheckedList.bind(this)}>
                {this.state.optionsList.map((item, index)=>{
                    return <Checkbox key={index} value={item} />;
                })}
            </CheckboxGroup>

            <h2>多选文字 CheckboxText</h2>
            <CheckboxGroup>
                <CheckboxText value="1">工作日</CheckboxText>
                <CheckboxText value="2">周末</CheckboxText>
                <CheckboxText value="3">节假日</CheckboxText>
                <CheckboxText value="4" disabled>黄飞虎</CheckboxText>
            </CheckboxGroup>
        </div>;
    }
}

