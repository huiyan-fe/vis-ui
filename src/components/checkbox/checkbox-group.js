import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CheckboxGroup extends React.Component {
    getChildContext() {
        return {
            component: this
        };
    }
    
    onChange(value) {
        if (this.props.onChange) {
            this.props.onChange(value)
        }
    }

    render() {
        const {value, children, className, style} = this.props;
        const classname = classNames({
            'visui-checkbox-group': true,
            [className]: className
        });
        return <div ref="CheckboxGroup" className={classname} style={style}>
        {
            React.Children.map(children, element => {
                if (!element || !element.type) {
                    return null;
                }

                const {elementType} = element.type;
                if (elementType !== 'Checkbox') {
                    return null;
                }

                return React.cloneElement(element, Object.assign({}, element.props, {
                    onChange: this.onChange.bind(this),
                    name: name,
                    model: value
                }));
            })
        }
        </div>;
    }
}

CheckboxGroup.defaultProps = {
};
CheckboxGroup.childContextTypes = {
    component: PropTypes.any
};
CheckboxGroup.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default CheckboxGroup;