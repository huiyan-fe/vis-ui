import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';

class Button extends React.Component {
    onClick(e) {
        this.props.onClick && this.props.onClick(e);
    }

    render() {
        const {disabled, icon, type, size, className, style, children, onMouseEnter, onMouseLeave} = this.props;
        const classname = classNames({
            'visui-btn': true,
            [`visui-btn-${type}`]: type,
            'visui-btn-small': size === 'small',
            'visui-btn-large': size === 'large',
            [className]: className
        });
        return <button 
            disabled={disabled}
            className={classname} 
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={this.onClick.bind(this)}
        >
            {icon && <Icon type={icon} />}
            <span>{children}</span>
        </button>;
    }
}

Button.defaultProps = {
    type: 'default',
    disabled: false
};

Button.propTypes = {
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;