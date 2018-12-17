import React from 'react';
import PropTypes from 'prop-types';
import jDate from './_jDate/index.js';

class TimerPicker extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
        };
    }

    componentDidMount() {
        const {type, defaultValue, step, onChange} = this.props;
        
        this._jdate = new jDate(this.input, {
            time: {
                type: jDate[type],
                value: defaultValue,
                step: step
            },
            change: function (value) {
                delete value.date;
                onChange && onChange(value);
            }
        });
    }

    componentWillUnmount() {
        this._jdate.remove();
    }

    render() {
        return (
            <div className="visui-timepicker">
                <input className="visui-jDate"
                    ref={input => this.input = input}
                    type="text"
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    disabled={this.props.disabled}
                />
            </div>
        )
    }
}

TimerPicker.defaultProps = {
    type: 'Single',
    step: 1,
    placeholder: '请选择时间'
};
TimerPicker.propTypes = {
    type: PropTypes.string,
    defaultValue: PropTypes.array,
    step: PropTypes.number,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};
export default TimerPicker;