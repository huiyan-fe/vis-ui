import React from 'react';
import classNames from "classnames";
import './style/index';

class Button extends React.Component {
    render() {
        const classname = classNames('visui-btn', this.props.className);
        return <div className={classname}>{this.props.children}</div>;
    }
}

Button.defaultProps = {};
Button.propTypes = {};

export default Button;