import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.value || props.defaultValue
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                options: nextProps.value || nextProps.defaultValue
            });
        }
    }

    getChildContext() {
        return {
            component: this
        };
    }

    onChange(value, checked) {
        let options = [...this.state.options];      // 数组深拷贝
        const index = options.indexOf(value);

        if (checked) {
            if (index === -1) {
                options.push(value);
            }
        } else {
            options.splice(index, 1);
        }

        if (!this.props.value) {
            this.setState({
                options: options
            }, () => {
                this.props.onChange && this.props.onChange(options);
            });
        } else {
            this.props.onChange && this.props.onChange(options);
        }
    }

    render() {
        const {options} = this.state;
        const {value, children, className, style} = this.props;
        const classname = classNames({
            'visui-checkbox-group': true,
            [className]: className
        });

        const childrenElement = React.Children.map(children, (element, index) => {
            if (!element || !element.type) {
                return null;
            }

            const {elementType} = element.type;
            if (elementType !== 'Checkbox' && elementType !== 'CheckboxText') {
                return null;
            }

            return React.cloneElement(element, Object.assign({}, element.props, {
                key: index,
                className: 'visui-checkbox-group-item',
                checked: element.props.checked || options.indexOf(element.props.value) >= 0,
                onChange: this.onChange.bind(this, element.props.value)
            }));
        });

        return <div ref="CheckboxGroup" className={classname} style={style}>
            {childrenElement}
        </div>;
    }
}

CheckboxGroup.defaultProps = {
    defaultValue: []
};
CheckboxGroup.childContextTypes = {
    component: PropTypes.any
};
CheckboxGroup.propTypes = {
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default CheckboxGroup;
