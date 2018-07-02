import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Radio from './radio';
class RadioButton extends Radio {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.getChecked(props)
        };
    }

    parent() {
        return this.context.component;
    }

    isDisabled() {
        if (!this.parent()) {
            return this.props.disabled;
        }
        return this.props.disabled || this.parent().props.disabled;
    }

    getSize() {
        return this.parent().props.size;
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
        const {name, value, className, style, children} = this.props;
        const disabled = this.isDisabled();
        const size = this.getSize();

        const classname = classNames({
            'visui-radio-btn': true,
            [`visui-radio-btn-checked`]: checked,
            [`visui-radio-btn-disabled`]: disabled
        });
        const wrapperClassname = classNames({
            'visui-radio-btn-wrapper': true,
            [`visui-radio-btn-${size}`]: size,
            [`visui-radio-btn-wrapper-checked`]: checked,
            [`visui-radio-btn-wrapper-disabled`]: disabled,
            [className]: className
        });
        return <label className={wrapperClassname} style={style}>
            <span className={classname}>
                <input
                    type="radio"
                    className="visui-radio-btn-original"
                    name={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={this.onChange.bind(this)}
                />
                <span className="visui-radio-btn-inner"></span>
            </span>
            <span className="visui-radio-btn-label">
                {children || value}
            </span>
        </label>;
    }
}

RadioButton.elementType = 'RadioButton';
RadioButton.contextTypes = {
    component: PropTypes.any
};
RadioButton.defaultProps = {
    value: '',
    checked: false,
    disabled: false
};
RadioButton.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
};

export default RadioButton;