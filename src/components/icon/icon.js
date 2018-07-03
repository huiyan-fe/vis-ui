import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Icon extends React.Component {
    render() {
        const { type, className, style } = this.props;
        const classname = classNames({
            'visui-icon': true,
            [`visui-icon-${type}`]: type,
            [className]: className
        });
        return (
            <span className={classname} style={style}></span>
        )
    }
}

Icon.defaultProps = {
    type: ''
};
Icon.propTypes = {
    type: PropTypes.string.isRequired
};

export default Icon;