import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {

    constructor(props: Object) {
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
        return <div className="visui-menu">
            {this.props.children}
        </div>;
    }

}

Menu.childContextTypes = {
    menu: PropTypes.any
};

export default Menu;
