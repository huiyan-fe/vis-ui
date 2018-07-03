import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from '../checkbox/index'

class CheckboxList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked
        };
    }

    componentWillReceiveProps(props) {
        this.setState({ checked: props.checked });
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
        const {value, indeterminate, className, style, children} = this.props;
        const disabled = this.isDisabled();
        const classname = classNames({
            'visui-checkbox': true,
            'visui-checkbox-indeterminate': indeterminate,
            'visui-checkbox-checked': checked,
            'visui-checkbox-disabled': disabled,
            [className]: className
        });
        const wrapperClassname = classNames({
            'visui-checkbox-wrapper': true,
            'visui-checkbox-wrapper-disabled': disabled,
        });
        return <div className={wrapperClassname} style={style}>
        </div>;
    }
}

CheckboxList.elementType = 'CheckboxList';
CheckboxList.contextTypes = {
    component: PropTypes.any
};
CheckboxList.defaultProps = {
    value: '',
    checked: false,
    disabled: false
};
CheckboxList.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    checked: PropTypes.bool
};

export default CheckboxList;