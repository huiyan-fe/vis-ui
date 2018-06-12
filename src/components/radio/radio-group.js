import React from 'react';
import classNames from 'classnames';
import './style/index';

class RadioGroup extends React.Component {
    render() {
        const classname = classNames({
            'visui-radio-group': true,
            [this.props.className]: this.props.className
        });
        return <div className={classname} style={this.props.style}>
            {this.props.children}
        </div>;
    }
}

RadioGroup.defaultProps = {
};

RadioGroup.propTypes = {
};

export default RadioGroup;