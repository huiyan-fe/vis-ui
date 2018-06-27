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

    componentWillReceiveProps(props) {
        const checked = this.getChecked(props);
    
        if (this.state.checked != checked) {
            this.setState({ checked });
        }
    }
    
    onChange(e) {
        const checked = e.target.checked;

        if (checked) {
            if (this.props.onChange) {
                this.props.onChange(this.props.value);
            }
        }
        this.setState({ checked });
    }

    getChecked(props) {
        // model 适配 RadioGroup 的情况
        return props.model == props.value || Boolean(props.checked);
    }

    render() {
        const {checked} = this.state;
        const {name, disabled, value, className, style, children} = this.props;
        const classname = classNames({
            'visui-radio': true,
            [`visui-radio-checked`]: checked,
            [`visui-radio-disabled`]: disabled,
            [className]: className
        });
        const wrapperClassname = classNames({
            'visui-radio-wrapper': true,
            [`visui-radio-wrapper-disabled`]: disabled,
        });
        return <label className={wrapperClassname} style={style}>
            <span className={classname}>
                <input
                    type="radio"
                    className="visui-radio-original"
                    name={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={this.onChange.bind(this)}
                />
                <span className="visui-radio-inner"></span>
            </span>
            <span className="visui-radio-label">
                {children || value}
            </span>
        </label>;
    }
}

Radio.elementType = 'Radio';
Radio.defaultProps = {
    value: '',
    checked: false,
    disabled: false
};
Radio.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
};

export default Radio;