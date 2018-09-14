import React from 'react';
import jDate from './_jdate/index.js';

class JDate extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            date: this.props.date || [new Date()]
        };
    }

    componentDidMount() {
        var self = this;
        var today = new Date();
        
        this._jdate = new jDate(this.refs.input, {
            date: {
                type: jDate.Multi,
                value: this.state.date,
                start: new Date(today.getFullYear()-1, today.getMonth(), today.getDate()),
                end: new Date(today.getFullYear(), today.getMonth(), today.getDate()-1),
                max: 5
            },
            // time: {
            //     type: jDate.Period
            // },
            change: function (value) {
                self.props.onChange && self.props.onChange(value);
            }
        });
    }

    componentWillUnmount() {
        this._jdate.remove();
    }

    changeTime(time) {
        // console.log(time)
        this._jdate.setChoosed(new Date(time));
    }

    getInputValue() {
        return this.refs.input.value;
    }

    render() {
        return (
            <input placeholder="请选择日期" className="huiyan-jDate" name={this.props.name} type="text" ref="input"/>
        )
    }
}

export default JDate;