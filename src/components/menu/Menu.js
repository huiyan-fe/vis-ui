import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.instanceType = 'Menu';

        this.state = {
        }
    }

    getChildContext() {
        return {
            menu: this
        };
    }

    render() {
        const {className, mode, style} = this.props;
        const classname = classNames(
            'visui-menu', 
            className, {
            'visui-menu-vertical': mode === 'vertical'
        });
        return <div className={classname} style={style}>
            {this.props.children}
        </div>;
    }

}

Menu.childContextTypes = {
    menu: PropTypes.any
};
Menu.propTypes = {
    mode: PropTypes.string,
    defaultSelectedIndexs: PropTypes.array
};
Menu.defaultProps = {
    mode: 'horizontal',
    defaultSelectedIndexs: []
};

export default Menu;
