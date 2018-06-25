import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Radio extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          checked: this.getChecked(props)
        };
      }
    
    onClick(e) {
        this.props.onClick && this.props.onClick(e);
    }

    render() {
        const classname = classNames({
            'visui-radio': true,
            [`visui-radio-${this.props.type}`]: this.props.type,
            'visui-radio-small': this.props.size === 'small',
            'visui-radio-large': this.props.size === 'large',
            [this.props.className]: this.props.className
        });
        return <label style={this.style()} className={this.className('el-radio')}>
            <span className={classname}>
                <span className="el-radio__inner"></span>
                <input
                    type="radio"
                    className="el-radio__original"
                    checked={checked}
                    disabled={this.props.disabled}
                    onChange={this.onChange.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                />
            </span>
            <span className="el-radio__label">
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