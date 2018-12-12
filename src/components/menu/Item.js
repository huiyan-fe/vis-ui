import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

class MenuItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const classname = classNames('visui-menu-item', this.props.className, {
            active: this.context.menu.props.defaultSelectedIndexs && this.context.menu.props.defaultSelectedIndexs.indexOf(this.props.index) > -1
        });
        return <div className={classname}>
            {this.props.children}
        </div>;
    }

}

MenuItem.contextTypes = {
    menu: PropTypes.any,
    group: PropTypes.any
};
MenuItem.propTypes = {
    index: PropTypes.string.isRequired,
};

export default MenuItem;
