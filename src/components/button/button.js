import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends React.Component {
    onClick(e) {
        this.props.onClick && this.props.onClick(e);
    }

    render() {
        const classname = classNames({
            'visui-btn': true,
            [`visui-btn-${this.props.type}`]: this.props.type,
            'visui-btn-small': this.props.size === 'small',
            'visui-btn-large': this.props.size === 'large',
            [this.props.className]: this.props.className
        });
        return <button className={classname} onClick={this.onClick.bind(this)} disabled={this.props.disabled} style={this.props.style}>
            {this.props.icon && <i>icon</i>}
            <span>{this.props.children}</span>
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