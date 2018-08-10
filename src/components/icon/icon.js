import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Icon extends React.Component {
    render() {
        const { type, className, style, onClick } = this.props;
        const classname = classNames({
            'visui-icon': true,
            [`visui-icon-${type}`]: type,
            [className]: className
        });
        return (
            <i className={classname} style={style} onClick={()=>{onClick && onClick()}}></i>
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