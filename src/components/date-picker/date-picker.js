import React from 'react';
import PropTypes from 'prop-types';
import jDate from './_jDate/index.js';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const {locale, type, defaultValue, start, end, enableDate, disabledDate, max, onChange} = this.props;
        this._jdate = new jDate(this.input, {
            lan: jDate.lan[locale],
            date: {
                type: jDate[type],
                value: defaultValue || [],
                start: start,
                end: end,
                enable: enableDate,
                disable: disabledDate,
                max: max
            },
            change: function (value) {
                delete value.time;
                onChange && onChange(value);
            }
        });
    }

    componentWillUnmount() {
        this._jdate.remove();
    }

    render() {
        return (
            <div className="visui-datepicker">
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

DatePicker.defaultProps = {
    locale: 'zh',
    type: 'Single',
    placeholder: '请选择日期'
};
DatePicker.propTypes = {
    locale: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.array,
    max: PropTypes.number,
    start: PropTypes.object,
    end: PropTypes.object,
    enableDate: PropTypes.array,
    disabledDate: PropTypes.array,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};
export default DatePicker;