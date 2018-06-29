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
        this.setState({ checked: props.checked });
    }
    
    onChange(e) {
        const checked = e.target.checked;
        const group = this.context.component;
        console.log(e.target.checked)

        if (group) {
            const length = group.state.options.length + (checked ? 1 : -1);
  
            if (group.props.min !== undefined && length < group.props.min) {
                return;
            }
  
            if (group.props.max !== undefined && length > group.props.max) {
                return;
            }
        }

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
        const {name, disabled, value, indeterminate, className, style, children} = this.props;
        const classname = classNames({
            'visui-checkbox': true,
            [`visui-checkbox-indeterminate`]: indeterminate,
            [`visui-checkbox-checked`]: checked,
            [`visui-checkbox-disabled`]: disabled,
            [className]: className
        });
        const wrapperClassname = classNames({
            'visui-checkbox-wrapper': true,
            [`visui-checkbox-wrapper-disabled`]: disabled,
        });
        return <label className={wrapperClassname} style={style}>
            <span className={classname}>
                <input
                    type="checkbox"
                    className="visui-checkbox-original"
                    name={name}
                    checked={checked}
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
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
};

export default Checkbox;