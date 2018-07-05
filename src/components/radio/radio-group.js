import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RadioGroup extends React.Component {
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
            'visui-radio-group': true,
            [className]: className
        });
        return <div ref="RadioGroup" className={classname} style={style}>
        {
            React.Children.map(children, element => {
                if (!element || !element.type) {
                    return null;
                }

                const {elementType} = element.type;
                if (elementType !== 'Radio' && elementType !== 'RadioButton') {
                    return null;
                }

                return React.cloneElement(element, Object.assign({}, element.props, {
                    onChange: this.onChange.bind(this),
                    className: 'visui-radio-group-item',
                    name: name,
                    model: value
                }));
            })
        }
        </div>;
    }
}

RadioGroup.defaultProps = {
};
RadioGroup.childContextTypes = {
    component: PropTypes.any
};
RadioGroup.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    size: PropTypes.string,     // 只对 RadioButton 有效
    onChange: PropTypes.func
};

export default RadioGroup;