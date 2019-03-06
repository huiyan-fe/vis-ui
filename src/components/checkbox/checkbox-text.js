import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from './checkbox';

class CheckboxText extends Checkbox {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked || props.defaultChecked
        };
    }

    componentWillReceiveProps(props) {
        const checked = Boolean(props.checked || props.defaultChecked);
        this.setState({ checked });
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

    isChecked() {
        if (!this.parent()) {
            return this.state.checked;
        }
        return this.props.checked;
    }

    onChange(e) {
        const checked = e.target.checked;

        if (!this.parent() && !this.props.checked) {
            this.setState({
                checked: checked
            }, () => {
                this.props.onChange && this.props.onChange(checked);
            });
        } else {
            this.props.onChange && this.props.onChange(checked);
        }
    }

    render() {
        const checked = this.isChecked();
        const {value, className, style, children, onMouseEnter, onMouseLeave} = this.props;
        const disabled = this.isDisabled();
        const classname = classNames({
            'visui-checkbox-text': true,
            'visui-checkbox-text-checked': checked,
            'visui-checkbox-text-disabled': disabled
        });
        const wrapperClassname = classNames({
            'visui-checkbox-text-wrapper': true,
            'visui-checkbox-text-wrapper-checked': checked,
            'visui-checkbox-text-wrapper-disabled': disabled,
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
                    type="checkbox"
                    className="visui-checkbox-text-original"
                    checked={checked}
                    value={value}
                    disabled={disabled}
                    onChange={this.onChange.bind(this)}
                />
                <span className="visui-checkbox-text-inner"></span>
            </span>
            <span className="visui-checkbox-text-label">
                {children || value}
            </span>
        </label>;
    }
}

CheckboxText.elementType = 'CheckboxText';
CheckboxText.contextTypes = {
    component: PropTypes.any
};
CheckboxText.defaultProps = {
    value: '',
    disabled: false,
    defaultChecked: false
};
CheckboxText.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};

export default CheckboxText;