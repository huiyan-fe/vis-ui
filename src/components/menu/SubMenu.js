import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

class SubMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const classname = classNames('visui-menu-submenu', this.props.className, {
            active: this.context.menu.props.defaultSelectedIndexs && this.context.menu.props.defaultSelectedIndexs.indexOf(this.props.index) > -1
        });
        return <div className={classname}>
            {this.props.title}
            <div className="subNav">{this.props.children}</div>
        </div>;
    }

}

SubMenu.contextTypes = {
    menu: PropTypes.any
};
SubMenu.propTypes = {
    index: PropTypes.string.isRequired,
};
export default SubMenu;
