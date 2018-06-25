import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
    onClick(e) {
        this.props.onClick && this.props.onClick(e);
    }

    render() {
        const {disabled, icon, type, size, className, style, children} = this.props;
        const classname = classNames({
            'visui-btn': true,
            [`visui-btn-${type}`]: type,
            'visui-btn-small': size === 'small',
            'visui-btn-large': size === 'large',
            [className]: className
        });
        return <button className={classname} onClick={this.onClick.bind(this)} disabled={disabled} style={style}>
            {icon && <i>icon</i>}
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
    type: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;