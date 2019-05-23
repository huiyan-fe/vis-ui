import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Radio from './radio';

class RadioText extends Radio {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.getChecked(props)
        };
    }

    componentWillReceiveProps(props) {
        const checked = this.getChecked(props);

        if (this.state.checked !== checked) {
            this.setState({checked});
        }
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

    onChange(e) {
        const checked = e.target.checked;

        if (checked) {
            if (this.props.onChange) {
                this.props.onChange(this.props.value);
            }
        }

        if (!this.parent()) {
            this.setState({
                checked
            });
        }
    }

    getChecked(props) {
        // model 适配 RadioGroup 的情况
        return props.model === props.value || Boolean(props.checked);
    }

    render() {
        const {checked} = this.state;
        const {name, value, className, style, children, onMouseEnter, onMouseLeave} = this.props;
        const disabled = this.isDisabled();

        const classname = classNames({
            'visui-radio-text': true,
            'visui-radio-text-checked': checked,
            'visui-radio-text-disabled': disabled
        });
        const wrapperClassname = classNames({
            'visui-radio-text-wrapper': true,
            'visui-radio-text-wrapper-checked': checked,
            'visui-radio-text-wrapper-disabled': disabled,
            [className]: className
        });
        return <label
            className={wrapperClassname}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <span className={classname}>
                <input
                    type="radio"
                    className="visui-radio-text-original"
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    onChange={this.onChange.bind(this)}
                />
                <span className="visui-radio-text-inner"></span>
            </span>
            <span className="visui-radio-text-label">
                {children || value}
            </span>
        </label>;
    }
}

RadioText.elementType = 'RadioText';
RadioText.contextTypes = {
    component: PropTypes.any
};
RadioText.defaultProps = {
    value: '',
    checked: false,
    disabled: false
};
RadioText.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
};

export default RadioText;
