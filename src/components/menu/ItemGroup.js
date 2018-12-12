import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

class MenuItemGroup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    getChildContext() {
        return {
            group: this
        };
    }

    render() {
        const classname = classNames('visui-menu-item-group', this.props.className);
        return <div className={classname} style={this.props.style}>
            <div className="visui-menu-item-group-title">{this.props.title}</div>
            <div>
                {this.props.children}
            </div>
        </div>;
    }

}

MenuItemGroup.childContextTypes = {
    menu: PropTypes.any,
    group: PropTypes.any
};
MenuItemGroup.propTypes = {
    index: PropTypes.string.isRequired,
    title: PropTypes.string
};
MenuItemGroup.defaultProps = {
    title: ''
};

export default MenuItemGroup;
