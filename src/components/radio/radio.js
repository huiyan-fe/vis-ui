import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    onChange(e) {
        this.props.onChange && this.props.onChange(e);
    }

    render() {
        const {disabled, type, size, className, style, children} = this.props;
        const classname = classNames({
            'visui-radio': true,
            [`visui-radio-${type}`]: type,
            'visui-radio-small': size === 'small',
            'visui-radio-large': size === 'large',
            [className]: className
        });
        return <label className={classname} style={style}>
            <span className={classname}>
                <span className="visui-radio-inner"></span>
                <input
                    type="radio"
                    className="visui-radio-original"
                    checked={checked}
                    disabled={disabled}
                    onChange={this.onChange.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                />
            </span>
            <span className="visui-radio-label">
                {children || value}
            </span>
        </label>;
    }
}

Radio.defaultProps = {
    type: 'default',
    disabled: false
};

Radio.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
};

export default Radio;