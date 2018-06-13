import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

class MenuItem extends React.Component {

    constructor(props: Object) {
        super(props);

        this.state = {
        }
    }

    render() {
        const classname = classNames('visui-menu-item', this.props.className, {
            active: this.context.menu.props.defaultSelectedKeys && this.context.menu.props.defaultSelectedKeys.indexOf(this.props.index) > -1
        });
        return <div className={classname}>
            {this.props.children}
        </div>;
    }

}

MenuItem.contextTypes = {
    menu: PropTypes.any
};

export default MenuItem;
