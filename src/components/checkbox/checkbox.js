import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        };
    }

    componentWillReceiveProps(props) {
        const checked = Boolean(props.checked);
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

    onChange(e) {
        const checked = e.target.checked;

        this.setState({
            checked: checked
        }, () => {
            if (this.props.onChange) {
                this.props.onChange(checked);
            }
        });
    }

    render() {
        const {checked} = this.state;
        const {value, indeterminate, className, style, children, onMouseEnter, onMouseLeave} = this.props;
        const disabled = this.isDisabled();
        const classname = classNames({
            'visui-checkbox': true,
            'visui-checkbox-indeterminate': indeterminate,
            'visui-checkbox-checked': checked,
            'visui-checkbox-disabled': disabled
        });
        const wrapperClassname = classNames({
            'visui-checkbox-wrapper': true,
            'visui-checkbox-wrapper-disabled': disabled,
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
                    className="visui-checkbox-original"
                    checked={checked}
                    value={value}
                    disabled={disabled}
                    onChange={this.onChange.bind(this)}
                />
                <span className="visui-checkbox-inner"></span>
            </span>
            <span className="visui-checkbox-label">
                {children || value}
            </span>
        </label>;
    }
}

Checkbox.elementType = 'Checkbox';
Checkbox.contextTypes = {
    component: PropTypes.any
};
Checkbox.defaultProps = {
    value: '',
    checked: false,
    disabled: false
};
Checkbox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};

export default Checkbox;