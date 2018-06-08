import React from 'react';
import classNames from 'classnames';
import './style/index';

class ButtonGroup extends React.Component {
    render() {
        const classname = classNames({
            'visui-btn-group': true,
            [this.props.className]: this.props.className
        });
        return <div className={classname} style={this.props.style}>
            {this.props.children}
        </div>;
    }
}

ButtonGroup.defaultProps = {
};

ButtonGroup.propTypes = {
};

export default ButtonGroup;