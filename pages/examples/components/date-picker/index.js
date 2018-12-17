import React, { Component } from 'react';
import {DatePicker} from '../../../../src';
const TimePicker = DatePicker.TimePicker;

export default class App extends Component {
    render() {
        const date = new Date();
        return <div>
            <DatePicker locale="en" placeholder="普通日期选择框" onChange={value => {console.log(value)}} />
            <br/>
            <DatePicker placeholder="Multi多选日期，最多选4天" type="Multi" max={4} onChange={value => {console.log(value)}} />
            <br/>
            <DatePicker placeholder="Period日期选择框" type="Period" onChange={value => {console.log(value)}} />
            <br/>
            <DatePicker locale="ja" placeholder="控制disabled状态"
                onChange={value => {console.log(value)}}
                start={new Date(date.getFullYear(), date.getMonth(), 3)}
                end={new Date(date.getFullYear(), date.getMonth() + 1, 15)}
                disabledDate={[
                    new Date(date.getFullYear(), date.getMonth(), 15)
                ]}
                enableDate={[
                    new Date(date.getFullYear(), date.getMonth() - 1, 15)
                ]}
            />
            <h2>时间选择框 DatePicker.TimePicker</h2>
            <TimePicker onChange={value => {console.log(value)}} />
            <br/>
            <TimePicker type="Period" onChange={value => {console.log(value)}} />
            <br/>
            <TimePicker disabled placeholder="这个disabled了" />
        </div>;
    }
}

